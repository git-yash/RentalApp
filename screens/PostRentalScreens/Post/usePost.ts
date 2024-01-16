import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {useState} from 'react';
import {Alert} from 'react-native';

const usePost = (navigation: any) => {
  const [images, setImages] = useState<ImageOrVideo>();
  const {showActionSheetWithOptions} = useActionSheet();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [itemWorth, setItemWorth] = useState<string>('');
  const [areImagesValid, setAreImagesValid] = useState<boolean>(true);
  const [titleErrorMessage, setTitleErrorMessage] = useState<
    string | undefined
  >(undefined);
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState<
    string | undefined
  >(undefined);
  const [itemWorthErrorMessage, setItemWorthErrorMessage] = useState<
    string | undefined
  >(undefined);
  const imageLengthText: string =
    images?.length >= 1 ? '(' + images?.length + ')' : '';
  const currentStepPosition: number = 0;
  const isTitleValid: boolean = title.trim().length > 2;
  const isDescriptionValid: boolean = description.trim().length > 4;
  const isItemWorthValid: boolean = itemWorth.length > 0;
  const titleError: string | undefined = isTitleValid
    ? undefined
    : 'Title must be greater than 2 characters.';
  const descriptionError: string | undefined = isDescriptionValid
    ? undefined
    : 'Description must be greater than 4 characters.';
  const itemWorthError: string | undefined = isItemWorthValid
    ? undefined
    : 'You must enter a value.';

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
  const setTitleWithValidation = (newTitleText: string): void => {
    setTitle(newTitleText);
    setTitleErrorMessage(
      newTitleText.trim().length > 2
        ? undefined
        : 'Title must be greater than 2 characters.',
    );
  };
  const setDescriptionWithValidation = (newDescriptionText: string): void => {
    setDescription(newDescriptionText);
    setDescriptionErrorMessage(
      newDescriptionText.trim().length > 4
        ? undefined
        : 'Description must be greater than 4 characters.',
    );
  };
  const setItemWorthWithValidation = (newItemWorthText: string): void => {
    const newItemWorthNumber: number = Number(newItemWorthText);
    setItemWorth(newItemWorthText);
    setItemWorthErrorMessage(
      newItemWorthText.length > 0 && newItemWorthNumber != 0
        ? undefined
        : 'You must enter a value.',
    );
  };
  const setValidity = (): boolean => {
    setAreImagesValid(!!images);
    setTitleErrorMessage(
      title.trim().length > 2
        ? undefined
        : 'Title must be greater than 2 characters.',
    );
    setDescriptionErrorMessage(
      description.trim().length > 4
        ? undefined
        : 'Description must be greater than 4 characters.',
    );
    setItemWorthErrorMessage(
      itemWorth.length > 0 && Number(itemWorth) != 0
        ? undefined
        : 'You must enter a value.',
    );
    return (
      areImagesValid && isTitleValid && isDescriptionValid && isItemWorthValid
    );
  };
  const onContinuePress = (): void => {
    const isValid: boolean = setValidity();
    if (isValid) {
      const itemWorthNumber: number = Number(itemWorth);
      navigation.navigate('Prices', {itemWorthNumber});
    }
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
              setAreImagesValid(true);
            });
            break;
          case 1:
            // Take photo
            ImagePicker.openCamera(imagePickerOptions).then(resultImages => {
              setImages(resultImages);
              setAreImagesValid(true);
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
    description,
    imageLengthText,
    images,
    currentStepPosition,
    itemWorth,
    itemWorthErrorMessage,
    titleErrorMessage,
    descriptionErrorMessage,
    areImagesValid,
    setTitleWithValidation,
    setDescriptionWithValidation,
    setItemWorthWithValidation,
    onContinuePress,
  };
};

export default usePost;
