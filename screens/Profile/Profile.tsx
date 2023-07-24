import React, {useCallback, useEffect, useState} from 'react';
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
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import Colors from '../../assets/Colors';
import storage from '@react-native-firebase/storage';
import Util from '../../Util';

const Profile = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState<string | undefined>(undefined);
  const profileImageRef: string =
    'userProfilePictures/' + auth().currentUser?.email;
  library.add(solidUser, regularUser);

  const {showActionSheetWithOptions} = useActionSheet();

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
  }, [isModalVisible]);

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
    const options = ['Choose Photo', 'Take Photo', 'Cancel'];
    const cancelButtonIndex = 2;

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
          <ProfileImage initials={Util.getUserInitials()} uri={imageURI} />
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
