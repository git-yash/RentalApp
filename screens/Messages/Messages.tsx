import React from 'react';
import {ScrollView, View} from 'react-native';
import {Divider} from 'native-base';
import useMessages from './useMessages';
import ChatCard from '../../components/ChatCard/ChatCard';
import {Message} from '../../src/API';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import ScreenNameConstants from '../ScreenNameConstants';
import messagesStyle from './Messages.style';

const Messages = () => {
  const {chats, getSender} = useMessages();

  return (
    <ScrollView style={messagesStyle.scrollView}>
      <View style={messagesStyle.titleContainer}>
        <ScreenTitle title={ScreenNameConstants.Messages} />
      </View>
      <Divider style={messagesStyle.topDivider} />
      {chats.map(c => {
        return (
          <ChatCard
            senderName={getSender(c)?.name || ''}
            lastMessage={c.chat.lastMessage as Message}
          />
        );
      })}
    </ScrollView>
  );
};

export default Messages;
