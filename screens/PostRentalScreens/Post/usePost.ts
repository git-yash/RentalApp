import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {useState} from 'react';
import {Alert} from 'react-native';

const usePost = (navigation: any) => {
  const [images, setImages] = useState<ImageOrVideo>();
  const {showActionSheetWithOptions} = useActionSheet();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [willDeliver, setWillDeliver] = useState(false);
  // const [willPickUp, setWillPickUp] = useState(false);
  const imageLengthText = images?.length >= 1 ? '(' + images?.length + ')' : '';

  const handleCancelButton = () => {
    Alert.alert(
      'Discard changes?',
      'Do you want to save this rental as a draft or discard this rental?',
      [
        {
          text: "Don't leave",
          style: 'cancel',
          onPress: () => {},
        },
        {
          text: 'Save Draft',
          style: 'default',
          onPress: () => navigation.navigate('Explore'),
        },
        {
          text: 'Discard',
          style: 'destructive',
          onPress: () => navigation.navigate('Explore'),
        },
      ],
    );
  };
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
    handleCancelButton,
    handleUploadImagesButton,
    title,
    setTitle,
    description,
    setDescription,
    imageLengthText,
    images,
  };
};

export default usePost;
