import React from 'react';
import {View} from 'react-native';
import pricesStyle from '../../screens/PostRentalScreens/Prices/Prices.style';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import MoneyTextInput from '../MoneyTextInput/MoneyTextInput';

const CheckboxWithMoneyTextInputView = (props: {
  checkboxOnChange: any;
  checkboxValue: boolean;
  checkboxTitle: string;
  inputValue: string;
  inputOnChange: any;
  inputRightElement?: JSX.Element | JSX.Element[] | undefined;
}) => {
  return (
    <View style={pricesStyle.checkboxWithMoneyTextInputView}>
      <CustomCheckbox
        onChange={props.checkboxOnChange}
        value={props.checkboxValue}
        text={props.checkboxTitle}
      />
      <MoneyTextInput
        value={props.inputValue}
        onChange={props.inputOnChange}
        maxLength={5}
        placeholderText={'0'}
        style={pricesStyle.moneyTextInput}
        inputRightElement={props.inputRightElement}
      />
    </View>
  );
};

export default CheckboxWithMoneyTextInputView;
