import {useEffect, useState} from 'react';
import {UserChats} from '../../src/API';
import MessagesService from './Messages.service';
import userStore from '../../store/userStore';

const useMessages = () => {
  const [chats, setChats] = useState<UserChats[]>([]);
  const messagesService = new MessagesService();
  const {user} = userStore();

  const getSender = (userChat: UserChats) => {
    const participants = userChat.chat.participants?.items;
    if (!participants) {
      return undefined;
    }
    for (const participant of participants) {
      if (participant?.user.name !== user?.name) {
        return participant?.user;
      }
    }
  };

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    messagesService
      .getChats(user.id)
      .then(response => {
        setChats(response);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  return {chats, getSender};
};

export default useMessages;
