import Colors from '../../assets/Colors';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {useState} from 'react';

const usePost = () => {
  const [images, setImages] = useState<ImageOrVideo>();
  const {showActionSheetWithOptions} = useActionSheet();
  const handleUploadImagesButton = () => {
    const options = ['Choose Photos', 'Take Photos', 'Cancel'];
    const cancelButtonIndex = 2;

    let imagePickerOptions = {
      width: 700,
      height: 500,
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
            ImagePicker.openPicker(imagePickerOptions).then(resultImages => {
              setImages(resultImages);
            });
            break;
          case 1:
            // Take photo
            ImagePicker.openCamera(imagePickerOptions).then(resultImages => {
              setImages(resultImages);
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
    images,
  };
};

export default usePost;
