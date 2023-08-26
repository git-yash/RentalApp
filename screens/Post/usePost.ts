import Colors from '../../assets/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import {useActionSheet} from '@expo/react-native-action-sheet';

const usePost = () => {
  const {showActionSheetWithOptions} = useActionSheet();
  const handleUploadImagesButton = () => {
    const options = ['Choose Photos', 'Take Photos', 'Cancel'];
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
      cropping: true,
      multiple: true,
      maxFiles: 10,
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
              console.log('choose');
            });
            break;
          case 1:
            // Take photo
            ImagePicker.openCamera(imagePickerOptions).then(image => {
              console.log('camera');
            });
            break;
          case 2:
            break;

          case cancelButtonIndex:
          // Canceled
        }
      },
    );
  };

  return {
    handleUploadImagesButton,
  };
};

export default usePost;
