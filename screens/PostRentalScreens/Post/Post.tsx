import React, {useEffect} from 'react';
import {Pressable, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import LogInToViewScreen from '../../../components/LogInToViewScreen/LogInToViewScreen';
import Colors from '../../../assets/Colors';
import {faArrowUpFromBracket, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import postStyle from './Post.style';
import usePost from './usePost';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import CustomTextArea from '../../../components/CustomTextArea/CustomTextArea';
import ContinueWithStepIndicatorView from '../components/ContinueWithStepIndicatorView/ContinueWithStepIndicatorView';
import DismissKeyboardView from '../../../components/DismissKeyboardView';
import MoneyTextInput from '../../../components/MoneyTextInput/MoneyTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useUserStore from '../../../store/userStore';

const Post = (props: {navigation: any}) => {
  const {
    handleCancelButton,
    handleUploadImagesButton,
    title,
    setTitleWithValidation,
    description,
    setDescriptionWithValidation,
    imageLengthText,
    areImagesValid,
    titleErrorMessage,
    descriptionErrorMessage,
    itemWorthErrorMessage,
    currentStepPosition,
    itemWorth,
    setItemWorthWithValidation,
    onContinuePress,
  } = usePost(props.navigation);

  const {user} = useUserStore();

  // set header left to x mark
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => handleCancelButton()}>
          <FontAwesomeIcon icon={faXmark} size={25} />
        </Pressable>
      ),
    });
  }, []);

  return (
    <DismissKeyboardView>
      <SafeAreaView style={{flex: 1}}>
        {user && (
          <KeyboardAwareScrollView extraScrollHeight={25}>
            <TouchableOpacity
              style={postStyle.uploadImagesButton}
              onPress={() => handleUploadImagesButton()}>
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                color={Colors.green}
              />
              <Text style={postStyle.uploadImagesText}>
                Upload Images {imageLengthText}
              </Text>
            </TouchableOpacity>
            <Text
              style={
                areImagesValid || areImagesValid === undefined
                  ? postStyle.inputBottomMessageText
                  : postStyle.inputBottomMessageErrorText
              }>
              You must upload at least 1 image
            </Text>
            <CustomTextInput
              inputTitle={'Title'}
              placeholderText={'Enter a title...'}
              value={title}
              onChange={setTitleWithValidation}
              errorMessage={titleErrorMessage}
              autoCapitalize={'sentences'}
              keyboardType={'default'}
              maxCharacterLength={33}
              textContentType={'name'}
            />
            <CustomTextArea
              inputTitle={'Description'}
              placeholderText={'Enter a description...'}
              value={description}
              onChange={setDescriptionWithValidation}
              errorMessage={descriptionErrorMessage}
              autoCapitalize={'sentences'}
              maxCharacterLength={300}
            />
            <MoneyTextInput
              placeholderText={'Enter the current value of the item...'}
              inputTitle={'How much is your item worth?'}
              maxLength={5}
              value={itemWorth}
              onChange={setItemWorthWithValidation}
              error={itemWorthErrorMessage}
            />
          </KeyboardAwareScrollView>
        )}
        {!user && <LogInToViewScreen message={'Log in to make a post'} />}
        <ContinueWithStepIndicatorView
          navigation={props.navigation}
          currentStepPosition={currentStepPosition}
          onContinuePress={() => onContinuePress()}
          continuePressableText={'Continue'}
        />
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default Post;
