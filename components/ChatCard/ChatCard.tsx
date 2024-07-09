import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Divider} from 'native-base';
import Colors from '../../assets/Colors';
import Util from '../../Util';
import {Message} from '../../src/API';

const ChatCard = (props: {senderName: string; lastMessage: Message}) => {
  return (
    <View>
      <View style={styles.container}>
        <Avatar>{Util.getUserInitials(props.senderName)}</Avatar>
        <View style={styles.textContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.userName}>{props.senderName}</Text>
            <Text
              style={{fontFamily: 'Poppins-Regular', color: Colors.gray700}}>
              {Util.formatCustomDate(new Date(props.lastMessage.sentAt))}
            </Text>
          </View>
          <Text style={styles.messageText} numberOfLines={2}>
            {props.lastMessage.content}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  userName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  messageText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.gray700,
  },
});

export default ChatCard;
