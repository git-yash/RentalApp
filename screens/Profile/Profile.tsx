import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AppState, Button, SafeAreaView, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';
import {useFocusEffect} from '@react-navigation/native';
import TabBarIcon from '../../components/TabBarIcon/TabBarIcon';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser as solidUser} from '@fortawesome/free-solid-svg-icons';
import {faUser as regularUser} from '@fortawesome/free-regular-svg-icons';
import ProfileImageNameView from '../../components/ProfileImage/ProfileImageNameView';
import {useActionSheet} from '@expo/react-native-action-sheet';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import Colors from '../../assets/Colors';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const Profile = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState<string | undefined>(undefined);
  const profileImageRef: string =
    'userProfilePictures/' + auth().currentUser?.email;
  library.add(solidUser, regularUser);

  const {showActionSheetWithOptions} = useActionSheet();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        firestore()
          .collection('users')
          .doc(auth().currentUser?.email as string)
          .update({isOnline: true})
          .then(() => {
            console.log('is online');
          });
      } else {
        firestore()
          .collection('users')
          .doc(auth().currentUser?.email as string)
          .update({isOnline: false})
          .then(() => {
            console.log('is offline');
          });
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const fetchImage = async () => {
    try {
      const url = await storage().ref(profileImageRef).getDownloadURL();
      setImageURI(url);
    } catch (error) {
      console.error('Error fetching image URI: ', error);
      setImageURI(undefined);
    }
  };

  useEffect(() => {
    fetchImage().then(() => console.log('image fetched'));
  }, [auth().currentUser]);

  useEffect(() => {
    fetchImage().then(() => console.log('image fetched'));
  }, []);

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

  const uploadProfileImage = async (image: ImageOrVideo) => {
    const reference = storage().ref(profileImageRef);
    await reference.putFile(image.path as string);
  };

  const handleEditProfileImageActionSheetButton = () => {
    const optionsWithoutImage = ['Choose Photo', 'Take Photo', 'Cancel'];
    const optionsWithImage = [
      'Replace Photo',
      'Take Photo',
      'Remove Current Photo',
      'Cancel',
    ];
    const options =
      imageURI !== undefined ? optionsWithImage : optionsWithoutImage;
    const cancelButtonIndex = imageURI !== undefined ? 3 : 2;
    const destructiveButtonIndex = imageURI !== undefined ? 2 : undefined;

    let imagePickerOptions = {
      width: 300,
      height: 300,
      cropperActiveWidgetColor: Colors.green,
      cropperCancelColor: Colors.invalidRed,
      cropperChooseColor: Colors.green,
      cropperStatusBarColor: Colors.green,
      cropperTintColor: Colors.green,
      cropperToolbarColor: Colors.green,
      cropperToolbarWidgetColor: Colors.green,
      cropperCircleOverlay: true,
      cropping: true,
    };

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex: number | undefined) => {
        switch (selectedIndex) {
          case 0:
            // Choose photo
            ImagePicker.openPicker(imagePickerOptions).then(image => {
              setImageURI(image.path);
              uploadProfileImage(image).then(() => {
                fetchImage().then(() => console.log('image fetched'));
              });
            });
            break;
          case 1:
            // Take photo
            ImagePicker.openCamera(imagePickerOptions).then(image => {
              setImageURI(image.path);
              uploadProfileImage(image).then(() => {
                fetchImage().then(() => console.log('image fetched'));
              });
            });
            break;
          case 2:
            setImageURI(undefined);
            storage()
              .ref(profileImageRef)
              .delete()
              .then(() => {
                console.log('removed');
              });
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
          <ProfileImageNameView uri={imageURI} />
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
