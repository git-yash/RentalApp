import {Box, Input, Pressable, Text} from 'native-base';
import React, {useState} from 'react';
import customTextInputStyles from '../CustomTextInput/CustomTextInput.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleInfo,
  faEye,
  faEyeSlash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';
import Util from '../../Util';
import Modal from 'react-native-modal';
import customSecurePasswordCheckerTextInputStyles from './CustomSecurePasswordCheckerTextInput.style';

const CustomSecurePasswordCheckerTextInput = (props: {
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
        backgroundColor={Util.getPasswordStrengthBorderColor(
          Util.getPasswordStrength(props.value),
        )}
        style={customSecurePasswordCheckerTextInputStyles.inputContainer}>
        <Input
          w={{
            md: '25%',
          }}
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable
              style={customSecurePasswordCheckerTextInputStyles.eyePressable}
              onPress={() => setShow(!show)}>
              <FontAwesomeIcon
                style={{color: Colors.green}}
                icon={show ? faEye : faEyeSlash}
                size={25}
              />
            </Pressable>
          }
          placeholder="Enter your password..."
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
          backgroundColor={Util.getPasswordStrengthBorderColor(
            Util.getPasswordStrength(props.value),
          )}
          style={customSecurePasswordCheckerTextInputStyles.checkerContainer}>
          <Text style={customSecurePasswordCheckerTextInputStyles.checkerText}>
            Password Strength: {Util.getPasswordStrength(props.value)}
          </Text>
          <Pressable
            onPress={() => {
              setShowPasswordInfoModal(true);
            }}
            style={customSecurePasswordCheckerTextInputStyles.infoPressable}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              color={'white'}
              style={customSecurePasswordCheckerTextInputStyles.infoIcon}
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
        swipeDirection={['down', 'right']}
        onBackdropPress={() => setShowPasswordInfoModal(false)}>
        <Box style={customSecurePasswordCheckerTextInputStyles.modalView}>
          <Box
            style={
              customSecurePasswordCheckerTextInputStyles.infoModalHeaderContainer
            }>
            <Pressable
              onPress={() => {
                setShowPasswordInfoModal(false);
              }}
              style={
                customSecurePasswordCheckerTextInputStyles.dismissPressable
              }>
              <FontAwesomeIcon icon={faXmark} color={'black'} size={25} />
            </Pressable>
            <Text style={customSecurePasswordCheckerTextInputStyles.infoTitle}>
              Password Strength
            </Text>
          </Box>
          <Text style={customSecurePasswordCheckerTextInputStyles.infoSubtitle}>
            Strong passwords include: {'\n'}
          </Text>
          <Text style={customSecurePasswordCheckerTextInputStyles.infoText}>
            - At least 8 characters {'\n'}- At least 1 uppercase character{' '}
            {'\n'}- At least 1 lowercase letter {'\n'}- At least 1 digit {'\n'}-
            At least 1 special character
          </Text>
        </Box>
      </Modal>
    </Box>
  );
};

export default CustomSecurePasswordCheckerTextInput;
