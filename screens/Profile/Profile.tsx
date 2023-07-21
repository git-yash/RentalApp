import React, {useCallback, useState} from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';
import {useFocusEffect} from '@react-navigation/native';
import TabBarIcon from '../../components/TabBarIcon/TabBarIcon';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser as solidUser} from '@fortawesome/free-solid-svg-icons';
import {faUser as regularUser} from '@fortawesome/free-regular-svg-icons';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import {useActionSheet} from '@expo/react-native-action-sheet';
// import {
//   CameraOptions,
//   ImageLibraryOptions,
//   launchCamera,
//   launchImageLibrary,
// } from 'react-native-image-picker';

const Profile = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  library.add(solidUser, regularUser);

  const {showActionSheetWithOptions} = useActionSheet();

  useFocusEffect(
    useCallback(() => {
      const isLoggedIn = auth().currentUser;

      props.navigation.setOptions({
        tabBarLabel: isLoggedIn ? 'Profile' : 'Log in',
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            isFocused={focused}
            icon={isLoggedIn ? solidUser : regularUser}
          />
        ),
      });
    }, [props.navigation, isModalVisible]), // Changes icon of tab bar item when user is logged in or not
  );

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        setModalVisible(true);
      });
  };

  const handleEditProfileImageActionSheetButton = () => {
    const options = ['Choose Photo', 'Take Photo', 'Cancel'];
    const cancelButtonIndex = 2;

    let chooseImageOptions: ImageLibraryOptions = {
      mediaType: 'photo',
      selectionLimit: 1,
    };

    let takePhotoOptions: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'front',
    };

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (selectedIndex: number | undefined) => {
        switch (selectedIndex) {
          case 0:
            // Choose photo
            // launchImageLibrary(chooseImageOptions);
            break;
          case 1:
            // Take photo
            // launchCamera(takePhotoOptions);
            break;

          case cancelButtonIndex:
          // Canceled
        }
      },
    );
  };

  return (
    <SafeAreaView>
      {auth().currentUser && (
        <View>
          <ProfileImage initials={'YS'} uri={'no'} />
          <Button
            title="Edit"
            onPress={() => {
              handleEditProfileImageActionSheetButton();
            }}
          />
          <Button
            title="Sign out"
            onPress={() => {
              handleSignOut();
            }}
          />
        </View>
      )}
      {!auth().currentUser && (
        <Button
          title={'Log in or Sign up'}
          onPress={() => setModalVisible(true)}
        />
      )}
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default Profile;
