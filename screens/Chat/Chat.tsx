import React, {useEffect} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Bounceable} from 'rn-bounceable';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import chatStyles from './Chat.style';
import useChat from './useChat';
import Colors from '../../assets/Colors';

const Chat = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {senderName, chatID} = route.params;
  const {
    messages,
    isMessageFromUser,
    onMessageButtonPress,
    message,
    setMessage,
    canSendMessage,
  } = useChat(chatID);

  useEffect(() => {
    navigation.setOptions({
      title: senderName.split(' ')[0],
    });
  }, []);

  return (
    <GestureHandlerRootView style={chatStyles.container}>
      <KeyboardAvoidingView
        style={chatStyles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20}>
        <SafeAreaView style={chatStyles.safeAreaView}>
          <FlatList
            data={messages}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: isMessageFromUser(item.userID)
                    ? Colors.darkGreen
                    : Colors.gray300,
                  padding: 10,
                  margin: 10,
                  maxWidth: '75%',
                  borderRadius: 10,
                  alignSelf: isMessageFromUser(item.userID)
                    ? 'flex-end'
                    : 'flex-start',
                }}>
                <Text
                  style={{
                    color: isMessageFromUser(item.userID) ? 'white' : 'black',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 14,
                  }}>
                  {item.content}
                </Text>
                <Text>{item.sentAt}</Text>
              </View>
            )}
            contentContainerStyle={chatStyles.flatListContentContainer}
          />
          <View style={chatStyles.stickyView}>
            <TextInput
              style={chatStyles.input}
              placeholder="Type a message"
              value={message}
              onChangeText={text => setMessage(text)}
            />
            <View style={{flex: 1}}>
              <Bounceable disabled={!canSendMessage}>
                <Pressable
                  disabled={!canSendMessage}
                  onPress={() => onMessageButtonPress(message)}
                  style={
                    canSendMessage
                      ? chatStyles.pressableCanSend
                      : chatStyles.pressableCannotSend
                  }>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    color={'white'}
                    size={18}
                  />
                </Pressable>
              </Bounceable>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default Chat;
