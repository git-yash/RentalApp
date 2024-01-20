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
  maxLength?: number;
  inputRightElement?: JSX.Element | JSX.Element[] | undefined;
}) => {
  const defaultMaxLength: number = 5;
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
        maxLength={props.maxLength ? props.maxLength : defaultMaxLength}
        placeholderText={'0'}
        style={pricesStyle.moneyTextInput}
        inputRightElement={props.inputRightElement}
      />
    </View>
  );
};

export default CheckboxWithMoneyTextInputView;
