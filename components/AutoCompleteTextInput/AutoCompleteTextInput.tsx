import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import autoCompleteTextInputWithResultsStyle from './AutoCompleteTextInputWithResults.style';
import React, {useRef, useState} from 'react';
import autoCompleteTextInputStyle from './AutoCompleteTextInput.style';
import {Text, View} from 'react-native';
import Colors from '../../assets/Colors';

const AutoCompleteTextInput = (props: {
  placeholderText: string;
  titleText: string;
  addressText: string;
  setAddressText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const autoCompleteTextInputRef = useRef();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          marginLeft: 20,
          fontSize: 15,
          marginRight: 15,
          color: Colors.gray700,
          marginTop: 10,
        }}>
        {props.titleText}
      </Text>
      <GooglePlacesAutocomplete
        placeholder={props.placeholderText}
        ref={autoCompleteTextInputRef}
        textInputProps={{
          value: props.addressText,
          onChangeText: text => {
            props.setAddressText(text);
            autoCompleteTextInputRef.current?.setAddressText(text);
          },
          onFocus: () => setIsFocused(true),
          onBlur: () => setIsFocused(false),
        }}
        debounce={300}
        disableScroll={true}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyCWx3SEZL595KnuMgxOyGfGAmzcoZ-2eUA',
          language: 'en',
        }}
        styles={
          props.addressText.length > 0 && isFocused
            ? autoCompleteTextInputWithResultsStyle
            : autoCompleteTextInputStyle
        }
      />
    </View>
  );
};

export default AutoCompleteTextInput;
