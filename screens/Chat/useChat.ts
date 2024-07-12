import {useCallback, useEffect, useState} from 'react';
import {Message} from '../../src/API';
import ChatService from './Chat.service';
import {Alert} from 'react-native';
import useUserStore from '../../store/userStore';
import {Subscription} from 'rxjs';
import {useFocusEffect} from '@react-navigation/native';

const useChat = (chatID: string) => {
  const [messages, setMessages] = useState<Message[] | undefined>(undefined);
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
