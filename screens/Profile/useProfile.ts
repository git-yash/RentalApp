import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useActionSheet} from '@expo/react-native-action-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import Colors from '../../assets/Colors';
import ProfileService from './Profile.service';

const useProfile = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState<string | undefined>(undefined);
  const profileImageRef: string =
    'userProfilePictures/' + auth().currentUser?.email;
  const {showActionSheetWithOptions} = useActionSheet();
  const profileService = new ProfileService();

  // useEffect(() => {
  //   Geocoder.init(Util.getAPIKeyForPlatform(Platform.OS));
  //   Geocoder.from('1112 Stillwell Ridge, Cedar Park, TX, USA')
  //     .then(json => {
  //       setLocation(json.results[0].geometry.location);
  //       console.log(location);
  //     })
  //     .catch(error => console.warn(error));
  //   Util.getAllRentals(location, 5).then(r => console.log(r));
  // }, []);

  useEffect(() => {
    void profileService.fetchImage(profileImageRef, setImageURI);
  }, [auth().currentUser]);

  const handleEditProfileImageActionSheetButton = () => {
    const optionsWithoutImage = ['Choose Photo', 'Take Photo', 'Cancel'];
    const optionsWithImage = [
      'Choose Photo',
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
              profileService
                .uploadProfileImage(profileImageRef, image)
                .then(() => {
                  void profileService.fetchImage(profileImageRef, setImageURI);
                });
            });
            break;
          case 1:
            // Take photo
            ImagePicker.openCamera(imagePickerOptions).then(image => {
              setImageURI(image.path);
              profileService
                .uploadProfileImage(profileImageRef, image)
                .then(() => {
                  void profileService.fetchImage(profileImageRef, setImageURI);
                });
            });
            break;
          case 2:
            setImageURI(undefined);
            profileService.removeImage(profileImageRef);
            break;

          case cancelButtonIndex:
          // Canceled
        }
      },
    );
  };
  return {
    isModalVisible,
    imageURI,
    handleEditProfileImageActionSheetButton,
    setModalVisible,
  };
};

export default useProfile;
