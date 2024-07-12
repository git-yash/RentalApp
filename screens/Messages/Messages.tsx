import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {Divider} from 'native-base';
import useMessages from './useMessages';
import ChatCard from '../../components/ChatCard/ChatCard';
import {Message} from '../../src/API';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import ScreenNameConstants from '../ScreenNameConstants';
import messagesStyle from './Messages.style';
import {useNavigation} from '@react-navigation/native';

const Messages = () => {
  const {chats, getSender} = useMessages();
  const navigation = useNavigation();

  return (
    <View style={messagesStyle.container}>
      <View style={messagesStyle.titleContainer}>
        <ScreenTitle title={ScreenNameConstants.Messages} />
      </View>
      {chats.length > 0 ? (
        <ScrollView style={messagesStyle.scrollView}>
          <Divider style={messagesStyle.topDivider} />
          {chats.map(c => (
            <Pressable
              key={c.chat.id + '-pressable'}
              onPress={() =>
                navigation.navigate(ScreenNameConstants.Chat, {
                  senderName: getSender(c)?.name || '',
                  chatID: c.chat.id,
                })
              }>
              <ChatCard
                key={c.chat.id + '-card'}
                senderName={getSender(c)?.name || ''}
                lastMessage={c.chat.lastMessage as Message}
              />
            </Pressable>
          ))}
        </ScrollView>
      ) : (
        <>
          <View style={messagesStyle.noChatsContainer}>
            <Text style={messagesStyle.noChatsText}>
              No chats available. ☹️
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Messages;
