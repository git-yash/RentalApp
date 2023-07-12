import {Box, Input, Text, Pressable} from 'native-base';
import React, {useState} from 'react';
import customTextInputStyles from '../CustomTextInput/CustomTextInput.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEye,
  faEyeSlash,
  faCircleInfo,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';
import Util from '../../Util';
import Modal from 'react-native-modal';

const CustomSecureTextInput = (props: {
  inputTitle: string;
  placeholderText: string;
  value: string;
  onChange: any;
  errorMessage: string;
  isValid: boolean;
  borderColor: string;
}) => {
  const [inputTextColor, setInputTextColor] = useState(Colors.gray800);
  const [show, setShow] = useState(false);
  const [showPasswordInfoModal, setShowPasswordInfoModal] = useState(false);

  function onBlurInput() {
    setInputTextColor(Colors.gray800);
  }

  function onFocusInput() {
    setInputTextColor(Colors.green);
  }

  return (
    <Box>
      <Text style={customTextInputStyles.inputTitleText}>
        {props.inputTitle}
      </Text>
      <Box
        style={{
          backgroundColor: Util.getPasswordStrengthBorderColor(
            Util.getPasswordStrength(props.value),
          ),
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 15,
          marginRight: 15,
          borderRadius: 10,
        }}>
        <Input
          w={{
            md: '25%',
          }}
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable
              style={{width: '20%', alignItems: 'flex-end', paddingRight: 5}}
              onPress={() => setShow(!show)}>
              <FontAwesomeIcon
                style={{color: Colors.green}}
                icon={show ? faEye : faEyeSlash}
                size={25}
              />
            </Pressable>
          }
          placeholder="Enter your password"
          placeholderTextColor={Colors.gray800}
          invalidOutlineColor={Colors.invalidRed}
          onBlur={onBlurInput}
          onFocus={onFocusInput}
          color={inputTextColor}
          onChangeText={props.onChange}
          value={props.value}
          autoCapitalize={'none'}
          keyboardType={'default'}
          textContentType={'password'}
          focusOutlineColor={props.borderColor}
          borderRadius={10}
          borderWidth={3}
          borderColor={Colors.gray400}
          bgColor={'white'}
          size="md"
          style={customTextInputStyles.input}
        />
        <Box
          style={{
            backgroundColor: Util.getPasswordStrengthBorderColor(
              Util.getPasswordStrength(props.value),
            ),
            borderRadius: 5,
            width: '100%',
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
            marginBottom: 5,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 13,
              fontWeight: '600',
              marginLeft: 5,
            }}>
            Password Strength: {Util.getPasswordStrength(props.value)}
          </Text>
          <Pressable
            onPress={() => {
              setShowPasswordInfoModal(true);
            }}
            style={{width: 30, height: 30}}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              color={'white'}
              style={{alignContent: 'center', marginTop: 3}}
              size={25}
            />
          </Pressable>
        </Box>
      </Box>
      {props.isValid && (
        <Text style={customTextInputStyles.errorMessage}>
          {props.errorMessage}
        </Text>
      )}
      <Modal
        isVisible={showPasswordInfoModal}
        swipeDirection={['down', 'right']}>
        <Box
          style={{
            backgroundColor: 'white',
            width: 300,
            height: 400,
            alignSelf: 'center',
            borderRadius: 15,
            borderWidth: 5,
            borderColor: Colors.green,
          }}>
          <Box
            style={{
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderBottomColor: Colors.borderGrey,
              marginBottom: 15,
            }}>
            <Pressable
              onPress={() => {
                setShowPasswordInfoModal(false);
              }}
              style={{width: 50, height: 30, margin: 10}}>
              <FontAwesomeIcon icon={faXmark} color={'black'} size={25} />
            </Pressable>
            <Text
              style={{
                alignSelf: 'center',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                fontWeight: '600',
              }}>
              Password Strength
            </Text>
          </Box>
          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              fontWeight: '500',
            }}>
            Strong passwords include: {'\n'}
          </Text>
          <Text
            style={{
              marginLeft: 20,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              fontWeight: '400',
            }}>
            - At least 8 characters {'\n'}- At least 1 uppercase character{' '}
            {'\n'}- At least 1 lowercase letter {'\n'}- At least 1 digit {'\n'}-
            At least 1 special character
          </Text>
        </Box>
      </Modal>
    </Box>
  );
};

export default CustomSecureTextInput;
