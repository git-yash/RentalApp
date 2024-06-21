import {useEffect, useState} from 'react';
import {useActionSheet} from '@expo/react-native-action-sheet';
import ImagePicker, {Options} from 'react-native-image-crop-picker';
import Colors from '../../assets/Colors';
import ProfileService from './Profile.service';
import useUserStore from '../../store/userStore';

const useProfile = () => {
  const {user} = useUserStore();
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState<string | undefined>(undefined);
  const profileImagePath: string = `public/userProfilePictures/${user?.id}.jpeg`;
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
    console.log('use effect');
    setImage()
      .then(r => console.log(r))
      .catch(e => console.error(e));
  }, []);

  const setImage = async () => {
    if (!profileImagePath) {
      return;
    }

    try {
      const urlOutput = await profileService.fetchImage(profileImagePath);
      setImageURI(urlOutput.url.href || undefined);
      return urlOutput;
    } catch (e) {
      setImageURI(undefined);
      throw e;
    }
  };

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
      mediaType: 'photo',
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: false,
      forceJpg: true,
      cropperActiveWidgetColor: Colors.green,
      cropperCancelColor: Colors.invalidRed,
      cropperChooseColor: Colors.green,
      cropperStatusBarColor: Colors.green,
      cropperTintColor: Colors.green,
      cropperToolbarColor: Colors.green,
      cropperToolbarWidgetColor: Colors.green,
      cropperCircleOverlay: true,
    } as Options;

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
            ImagePicker.openPicker(imagePickerOptions).then(async image => {
              profileService
                .uploadProfileImage(profileImagePath, image)
                .then(() => {
                  setImage().catch(e => console.error(e));
                })
                .catch(e => console.error('error uploading profile image', e));
            });
            break;
          case 1:
            // Take photo
            ImagePicker.openCamera(imagePickerOptions).then(image => {
              profileService
                .uploadProfileImage(profileImagePath, image)
                .then(() => {
                  setImage().catch(e => console.error(e));
                })
                .catch(e => console.error('error uploading profile image', e));
            });
            break;
          case 2:
            profileService
              .removeImage(profileImagePath)
              .then(() => setImageURI(undefined))
              .catch(e => console.error('error removing an image', e));
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
