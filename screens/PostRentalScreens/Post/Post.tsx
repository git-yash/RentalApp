import React, {useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import LogInToViewScreen from '../../../components/LogInToViewScreen/LogInToViewScreen';
import Colors from '../../../assets/Colors';
import {faArrowUpFromBracket, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import postStyle from './Post.style';
import usePost from './usePost';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import CustomTextArea from '../../../components/CustomTextArea/CustomTextArea';
import ContinuePressable from '../../../components/ContinuePressable/ContinuePressable';
import CustomStepIndicator from '../../../components/CustomStepIndicator/CustomStepIndicator';

const Post = (props: {navigation: any}) => {
  const {
    handleCancelButton,
    handleUploadImagesButton,
    title,
    setTitle,
    description,
    setDescription,
    imageLengthText,
    images,
  } = usePost(props.navigation);

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
    <SafeAreaView style={{flex: 1}}>
      {auth().currentUser && (
        <KeyboardAvoidingView>
          <TouchableOpacity
            style={postStyle.uploadImagesButton}
            onPress={() => handleUploadImagesButton()}>
            <FontAwesomeIcon icon={faArrowUpFromBracket} color={Colors.green} />
            <Text style={postStyle.uploadImagesText}>
              Upload Images {imageLengthText}
            </Text>
          </TouchableOpacity>
          <Text style={postStyle.inputBottomMessageText}>
            You must upload at least 1 image
          </Text>
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
        </KeyboardAvoidingView>
      )}
      {!auth().currentUser && (
        <LogInToViewScreen message={'Log in to make a post'} />
      )}
      <View style={postStyle.bottomView}>
        <CustomStepIndicator
          labels={['Post', 'Prices', 'Details', 'Review']}
          currentPosition={0}
        />
        <ContinuePressable
          onPress={() => {
            props.navigation.navigate('Prices');
          }}
          isDisabled={false}
          text={'Continue'}
          isLoading={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Post;
