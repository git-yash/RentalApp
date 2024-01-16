import React from 'react';
import {Pressable, Text, View} from 'react-native';
import ContinueWithStepIndicatorView from '../components/ContinueWithStepIndicatorView/ContinueWithStepIndicatorView';
import CustomCheckbox from '../../../components/CustomCheckbox/CustomCheckbox';
import DismissKeyboardView from '../../../components/DismissKeyboardView';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import pricesStyle from './Prices.style';
import usePrices from './usePrices';
import CheckboxWithMoneyTextInputView from '../../../components/CheckboxWithMoneyTextInputView/CheckboxWithMoneyTextInputView';

const Prices = (props: {navigation: any; route: any}) => {
  const {itemWorthNumber} = props.route.params;
  const {
    hourlyCheckbox,
    setHourlyCheckbox,
    dailyCheckbox,
    setDailyCheckbox,
    weeklyCheckbox,
    setWeeklyCheckbox,
    monthlyCheckbox,
    setMonthlyCheckbox,
    hourlyRate,
    setHourlyRate,
    dailyRate,
    setDailyRate,
    weeklyRate,
    setWeeklyRate,
    monthlyRate,
    setMonthlyRate,
    willDeliver,
    setWillDeliver,
    willPickUp,
    setWillPickUp,
    deliveryRate,
    setDeliveryRate,
    onContinuePress,
    applySuggestedRates,
  } = usePrices(itemWorthNumber);
  return (
    <DismissKeyboardView>
      <View style={pricesStyle.mainContainer}>
        <KeyboardAwareScrollView extraScrollHeight={50}>
          <View style={pricesStyle.scrollViewContainer}>
            <Text style={pricesStyle.rentalRatesTitleText}>
              What are your rental rates?
            </Text>
            <Text style={pricesStyle.suggestedRatesDescription}>
              Our suggested rates are 3% hourly, 17% daily, 60% weekly, and 140%
              monthly of your ${itemWorthNumber.toString()} item.
            </Text>
            <Pressable onPress={() => applySuggestedRates()}>
              <Text style={pricesStyle.applySuggestedRatesText}>
                Apply Suggested Rates
              </Text>
            </Pressable>
          </View>
          <CheckboxWithMoneyTextInputView
            checkboxOnChange={setHourlyCheckbox}
            checkboxValue={hourlyCheckbox}
            checkboxTitle={'Hourly'}
            inputValue={hourlyRate}
            inputOnChange={setHourlyRate}
          />
          <CheckboxWithMoneyTextInputView
            checkboxOnChange={setDailyCheckbox}
            checkboxValue={dailyCheckbox}
            checkboxTitle={'Daily'}
            inputValue={dailyRate}
            inputOnChange={setDailyRate}
          />
          <CheckboxWithMoneyTextInputView
            checkboxOnChange={setWeeklyCheckbox}
            checkboxValue={weeklyCheckbox}
            checkboxTitle={'Weekly'}
            inputValue={weeklyRate}
            inputOnChange={setWeeklyRate}
          />
          <CheckboxWithMoneyTextInputView
            checkboxOnChange={setMonthlyCheckbox}
            checkboxValue={monthlyCheckbox}
            checkboxTitle={'Monthly'}
            inputValue={monthlyRate}
            inputOnChange={setMonthlyRate}
          />
          <View style={pricesStyle.deliveryTitleView}>
            <Text style={pricesStyle.deliveryText}>Delivery?</Text>
            <Text style={pricesStyle.bothText}>(You can choose both)</Text>
          </View>
          <CheckboxWithMoneyTextInputView
            checkboxOnChange={setWillDeliver}
            checkboxValue={willDeliver}
            checkboxTitle={'I will deliver'}
            inputValue={deliveryRate}
            inputOnChange={setDeliveryRate}
            inputRightElement={
              <Text style={pricesStyle.inputDistanceText}>/ mi</Text>
            }
          />
          <CustomCheckbox
            value={willPickUp}
            onChange={setWillPickUp}
            text={'They will pick up the rental'}
          />
        </KeyboardAwareScrollView>
        <ContinueWithStepIndicatorView
          navigation={props.navigation}
          currentStepPosition={1}
          onContinuePress={() => onContinuePress()}
          continuePressableText={'Continue'}
        />
      </View>
    </DismissKeyboardView>
  );
};

export default Prices;
