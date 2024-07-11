import {useEffect, useState} from 'react';
import {Message} from '../../src/API';
import ChatService from './Chat.service';
import {Alert} from 'react-native';
import useUserStore from '../../store/userStore';

const useChat = (chatID: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatService = new ChatService();
  const {user} = useUserStore();
  const [message, setMessage] = useState('');
  const canSendMessage = message.length > 0;

  const isMessageFromUser = (userID: string) => {
    return userID === user?.id;
  };

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
      .then(r => {
        setMessages([...messages, r]);
        setMessage('');
      })
      .catch(e => {
        Alert.alert(e);
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
