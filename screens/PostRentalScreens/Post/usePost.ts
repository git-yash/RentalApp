import ImagePicker, {
  ImageOrVideo,
  Options,
} from 'react-native-image-crop-picker';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {useState} from 'react';
import {Alert} from 'react-native';
import ScreenNameConstants from '../../ScreenNameConstants';
import {Rental} from '../../../src/API';

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
  const rental: Rental = {
    address: '',
    bookedDateRanges: [],
    category: '',
    description: '',
    id: '',
    isAvailable: false,
    location: undefined,
    picturePaths: [],
    priceItems: [],
    prices: '',
    rating: 0,
    reviews: [],
    title: '',
    userEmail: '',
    itemValue: 0,
  };

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
          onPress: () => navigation.navigate(ScreenNameConstants.Explore),
        },
        {
          text: 'Discard',
          style: 'destructive',
          onPress: () => navigation.navigate(ScreenNameConstants.Explore),
        },
      ],
    );
  };
  const getTitleErrorMessage = (titleText: string): string | undefined => {
    return titleText.trim().length > 2
      ? undefined
      : 'Title must be greater than 2 characters.';
  };
  const getDescriptionErrorMessage = (
    descriptionText: string,
  ): string | undefined => {
    return descriptionText.trim().length > 4
      ? undefined
      : 'Description must be greater than 4 characters.';
  };

  const getItemWorthNumber = (itemWorthText: string): number => {
    return Number(itemWorthText);
  };
  const getItemWorthErrorMessage = (itemWorth: string): string | undefined => {
    return itemWorth.length > 0 && getItemWorthNumber(itemWorth) != 0
      ? undefined
      : 'You must enter a value.';
  };
  const setTitleWithValidation = (newTitleText: string): void => {
    setTitle(newTitleText);
    setTitleErrorMessage(getTitleErrorMessage(newTitleText));
  };
  const setDescriptionWithValidation = (newDescriptionText: string): void => {
    setDescription(newDescriptionText);
    setDescriptionErrorMessage(getDescriptionErrorMessage(newDescriptionText));
  };
  const setItemWorthWithValidation = (newItemWorthText: string): void => {
    setItemWorth(newItemWorthText);
    setItemWorthErrorMessage(getItemWorthErrorMessage(newItemWorthText));
  };
  const setValidity = (): boolean => {
    setAreImagesValid(!!images);
    setTitleErrorMessage(getTitleErrorMessage(title));
    setDescriptionErrorMessage(getDescriptionErrorMessage(description));
    setItemWorthErrorMessage(getItemWorthErrorMessage(itemWorth));
    return (
      areImagesValid && isTitleValid && isDescriptionValid && isItemWorthValid
    );
  };
  const onContinuePress = (): void => {
    const isValid: boolean = setValidity();
    if (isValid) {
      const itemWorthNumber: number = getItemWorthNumber(itemWorth);
      rental.title = title;
      rental.description = description;
      rental.itemValue = itemWorthNumber;
      rental.picturePaths = images.map((image: {path: string}) => image.path);
      navigation.navigate(ScreenNameConstants.Prices, {
        itemWorthNumber,
        rental,
      });
    }
  };
  const handleUploadImagesButton = () => {
    const options = ['Choose Photos', 'Take Photos', 'Cancel'];
    const cancelButtonIndex = 2;

    let imagePickerOptions = {
      mediaType: 'photo',
      width: 700,
      height: 500,
      cropping: true,
      multiple: true,
      maxFiles: 10,
      compressImageQuality: 0.7,
    } as Options;

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
