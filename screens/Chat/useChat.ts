import {useCallback, useEffect, useState} from 'react';
import ChatService from './Chat.service';
import {Alert} from 'react-native';
import useUserStore from '../../store/userStore';
import {Subscription} from 'rxjs';
import {useFocusEffect} from '@react-navigation/native';
import {ChatMessage} from './models/ChatMessage';

const useChat = (chatID: string) => {
  const [messages, setMessages] = useState<ChatMessage[] | undefined>(
    undefined,
  );
  const chatService = new ChatService();
  const {user} = useUserStore();
  const [message, setMessage] = useState('');
  const canSendMessage = message.length > 0;
  let messageSubscription: Subscription | undefined;

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
    chatService
      .getMessages(chatID)
      .then(msgs => {
        setMessages(msgs);
      })
      .catch(e => {
        Alert.alert('Unable to fetch messages.');
        console.error(e);
      });
  }, []);

  useEffect(() => {
    const msgs = messages;
    if (!msgs?.length) {
      return;
    }

    let currentDateString = new Date(msgs[0].sentAt).toDateString();
    let prevItemDateString = new Date(msgs[0].sentAt).toDateString();

    for (let i = 0; i < msgs.length; i++) {
      let currentItem = msgs[i];
      currentDateString = new Date(currentItem.sentAt).toDateString();
      let prevItem = msgs[i + 1];
      prevItemDateString = new Date(prevItem?.sentAt).toDateString();
      if (!prevItem) {
        msgs[i].dateString = currentDateString;
      }
      if (currentDateString !== prevItemDateString) {
        msgs[i].dateString = currentDateString;
      }
    }

    setMessages(msgs);
  }, [messages]);

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
  };
};

export default useChat;
