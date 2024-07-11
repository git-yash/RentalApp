import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Bounceable} from 'rn-bounceable';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import chatStyles from './Chat.style';

const Chat = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {senderName, chatID} = route.params;
  const [message, setMessage] = useState('');
  const canSendMessage = message.length > 0;

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
        <DismissKeyboardView style={chatStyles.dismissKeyboardView}>
          <SafeAreaView style={chatStyles.safeAreaView}>
            <View style={chatStyles.content}>
              {/* Other content goes here */}
            </View>
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
        </DismissKeyboardView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default Chat;
