import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import LogInToViewScreen from '../../components/LogInToViewScreen/LogInToViewScreen';
import Colors from '../../assets/Colors';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import postStyle from './Post.style';
import usePost from './usePost';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import {Checkbox} from 'native-base';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import customTextInputStyles from '../../components/CustomTextInput/CustomTextInput.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Slider} from '@miblanchard/react-native-slider';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import ContinuePressable from '../../components/ContinuePressable/ContinuePressable';

const Post = (props: {navigation: any}) => {
  const {handleUploadImagesButton, images} = usePost();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [willDeliver, setWillDeliver] = useState(false);
  // const [willPickUp, setWillPickUp] = useState(false);
  const imageLengthText = images?.length >= 1 ? '(' + images?.length + ')' : '';
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingLeft: 15, paddingBottom: 10}}>
        <ScreenTitle title={'Post'} />
      </View>
      <KeyboardAwareScrollView
        style={{paddingTop: 15, flexGrow: 1}}
        viewIsInsideTabBar={true}
        extraScrollHeight={15}>
        {auth().currentUser && (
          <View>
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
            <CustomTextInput
              inputTitle={'Title'}
              placeholderText={'Enter a title...'}
              value={title}
              onChange={setTitle}
              errorMessage={undefined}
              autoCapitalize={'sentences'}
              keyboardType={'default'}
              maxCharacterLength={33}
              textContentType={'name'}
            />
            <Text style={postStyle.inputBottomMessageText}>
              You must upload at least 1 image
            </Text>
            <CustomTextArea
              inputTitle={'Description'}
              placeholderText={'Enter a description...'}
              value={description}
              onChange={setDescription}
              errorMessage={undefined}
              autoCapitalize={'sentences'}
              maxCharacterLength={300}
            />
            {/*<View*/}
            {/*  style={{flexDirection: 'row', paddingLeft: 15, paddingTop: 15}}>*/}
            {/*  <Text*/}
            {/*    style={{*/}
            {/*      fontFamily: 'Poppins-SemiBold',*/}
            {/*      fontSize: 14,*/}
            {/*      color: Colors.gray800,*/}
            {/*    }}>*/}
            {/*    Delivery?*/}
            {/*  </Text>*/}
            {/*  <Text*/}
            {/*    style={{*/}
            {/*      fontFamily: 'Poppins-Regular',*/}
            {/*      alignSelf: 'center',*/}
            {/*      paddingLeft: 10,*/}
            {/*      fontSize: 12,*/}
            {/*      color: Colors.gray700,*/}
            {/*    }}>*/}
            {/*    (You can choose both)*/}
            {/*  </Text>*/}
            {/*</View>*/}
            {/*<BouncyCheckbox*/}
            {/*  size={25}*/}
            {/*  fillColor={Colors.green}*/}
            {/*  iconComponent={*/}
            {/*    <FontAwesomeIcon icon={faCheck} color={'white'} size={14} />*/}
            {/*  }*/}
            {/*  unfillColor="#FFFFFF"*/}
            {/*  text="I will deliver"*/}
            {/*  innerIconStyle={{borderWidth: 2}}*/}
            {/*  style={{paddingLeft: 15, paddingTop: 10}}*/}
            {/*  textStyle={{*/}
            {/*    fontFamily: 'Poppins-Regular',*/}
            {/*    fontSize: 14,*/}
            {/*    textDecorationLine: 'none',*/}
            {/*  }}*/}
            {/*  onPress={(isChecked: boolean) => {*/}
            {/*    setWillDeliver(isChecked);*/}
            {/*  }}*/}
            {/*/>*/}
            {/*<BouncyCheckbox*/}
            {/*  size={25}*/}
            {/*  fillColor={Colors.green}*/}
            {/*  unfillColor="#FFFFFF"*/}
            {/*  iconComponent={*/}
            {/*    <FontAwesomeIcon icon={faCheck} color={'white'} size={14} />*/}
            {/*  }*/}
            {/*  text="They will pick up the rental"*/}
            {/*  innerIconStyle={{borderWidth: 2}}*/}
            {/*  style={{paddingLeft: 15, paddingTop: 10}}*/}
            {/*  textStyle={{*/}
            {/*    fontFamily: 'Poppins-Regular',*/}
            {/*    fontSize: 14,*/}
            {/*    textDecorationLine: 'none',*/}
            {/*  }}*/}
            {/*  onPress={(isChecked: boolean) => {*/}
            {/*    setWillPickUp(isChecked);*/}
            {/*  }}*/}
            {/*/>*/}
            {/*{willDeliver && (*/}
            {/*  <View>*/}
            {/*    <Text>Set Delivery Price:</Text>*/}
            {/*    <Slider />*/}
            {/*  </View>*/}
            {/*)}*/}
          </View>
        )}
        {!auth().currentUser && (
          <LogInToViewScreen message={'Log in to make a post'} />
        )}
      </KeyboardAwareScrollView>
      <KeyboardAvoidingView behavior={'padding'}>
        <View>
          <ContinuePressable
            onPress={() => {}}
            isDisabled={false}
            text={'Continue'}
            isLoading={false}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Post;
