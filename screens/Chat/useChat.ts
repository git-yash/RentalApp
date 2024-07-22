import {useCallback, useEffect, useState} from 'react';
import ChatService from './Chat.service';
import {Alert} from 'react-native';
import useUserStore from '../../store/userStore';
import {Subscription} from 'rxjs';
import {useFocusEffect} from '@react-navigation/native';
import {ChatMessage} from './models/ChatMessage';
import Util from '../../Util';

const useChat = (chatID: string) => {
  const [messages, setMessages] = useState<ChatMessage[] | undefined>(
    undefined,
  );
  const chatService = new ChatService();
  const {user} = useUserStore();
  const [message, setMessage] = useState('');
  const [isLoadingMoreMessages, setIsLoadingMoreMessages] =
    useState<boolean>(false);
  const [nextToken, setNextToken] = useState<string | null | undefined>(
    undefined,
  );
  const canSendMessage = message.length > 0;
  let messageSubscription: Subscription | undefined;
  const [endReachedCalledDuringMomentum, setEndReachedCalledDuringMomentum] =
    useState(true);

  const isMessageFromUser = (userID: string) => {
    return userID === user?.id;
  };

  useFocusEffect(
    useCallback(() => {
      if (messages === undefined) {
        return;
      }

      chatService.messageSubscription(chatID).then(s => {
        messageSubscription = s.subscribe({
          next: data => {
            setMessages([data.data.onMessageByChatID, ...messages]);
          },
          error: err => {
            Alert.alert(err.message);
          },
        });
      });

      return () => {
        // screen unfocused
        if (!messageSubscription) {
          return;
        }
        messageSubscription.unsubscribe();
      };
    }, [messages]),
  );

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    const msgs = messages;
    if (!msgs?.length) {
      return;
    }

    let currentDateString = new Date(msgs[0].sentAt).toDateString();
    let prevItemDateString = new Date(msgs[0].sentAt).toDateString();

    for (let i = 0; i < msgs.length; i++) {
      msgs[i].delivered = true;
      let currentItem = msgs[i];
      currentDateString = new Date(currentItem.sentAt).toDateString();
      let prevItem = msgs[i + 1];
      prevItemDateString = new Date(prevItem?.sentAt).toDateString();
      if (!prevItem) {
        msgs[i].dateString = Util.getChatDate(new Date(currentItem.sentAt));
      }
      if (currentDateString !== prevItemDateString) {
        msgs[i].dateString = Util.getChatDate(new Date(currentItem.sentAt));
      }
    }

    setMessages(msgs);
  }, [messages]);

  const fetchMessages = (loadingMoreMessages?: boolean) => {
    if (loadingMoreMessages) {
      setIsLoadingMoreMessages(true);
    }
    chatService
      .getMessages(chatID, nextToken)
      .then(msgs => {
        if (messages && messages?.length > 0 && nextToken) {
          let tempMessages = messages;
          let newMessages = msgs.items;
          tempMessages?.push(...newMessages);
          setMessages(tempMessages);
        } else {
          setMessages(msgs.items as ChatMessage[]);
        }
        setNextToken(msgs.nextToken);
        if (loadingMoreMessages) {
          setIsLoadingMoreMessages(false);
        }
      })
      .catch(e => {
        Alert.alert('Unable to fetch messages.');
        console.error(e);
      });
  };

  const onScrollToTop = (info: {distanceFromEnd: number}) => {
    if (info.distanceFromEnd === 0 || !nextToken) {
      return;
    }
    if (!isLoadingMoreMessages && !endReachedCalledDuringMomentum) {
      fetchMessages(true);
    }
  };

  const onMessageButtonPress = (messageText: string) => {
    chatService
      .sendMessage(chatID, messageText, user?.id || '')
      .catch(e => {
        Alert.alert(e);
      })
      .finally(() => {
        setMessage('');
      });
  };

  return {
    messages,
    isMessageFromUser,
    onMessageButtonPress,
    message,
    setMessage,
    canSendMessage,
    onScrollToTop,
    isLoadingMoreMessages,
    endReachedCalledDuringMomentum,
    setEndReachedCalledDuringMomentum,
  };
};

export default useChat;
