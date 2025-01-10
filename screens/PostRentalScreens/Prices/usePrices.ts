import React, {useState} from 'react';
import {Alert} from 'react-native';
import ScreenNameConstants from '../../ScreenNameConstants';
import {Rental} from '../../../src/API';

const usePrices = (itemWorthNumber: number, rental: Rental) => {
  const suggestedHourlyRate: string = (itemWorthNumber * 0.03).toFixed(0);
  const suggestedDailyRate: string = (itemWorthNumber * 0.17).toFixed(0);
  const suggestedWeeklyRate: string = (itemWorthNumber * 0.6).toFixed(0);
  const suggestedMonthlyRate: string = (itemWorthNumber * 1.4).toFixed(0);
  const [hourlyCheckbox, setHourlyCheckbox] = useState<boolean>(false);
  const [dailyCheckbox, setDailyCheckbox] = useState<boolean>(true);
  const [weeklyCheckbox, setWeeklyCheckbox] = useState<boolean>(false);
  const [monthlyCheckbox, setMonthlyCheckbox] = useState<boolean>(false);
  const [hourlyRate, setHourlyRate] = useState<string>(suggestedHourlyRate);
  const [dailyRate, setDailyRate] = useState<string>(suggestedDailyRate);
  const [weeklyRate, setWeeklyRate] = useState<string>(suggestedWeeklyRate);
  const [monthlyRate, setMonthlyRate] = useState<string>(suggestedMonthlyRate);
  const [willDeliver, setWillDeliver] = useState<boolean>(false);
  const [willPickUp, setWillPickUp] = useState<boolean>(true);
  const [deliveryRate, setDeliveryRate] = useState<string>('');

  const onContinuePress = (navigation: any): void => {
    const isValid: boolean = getValidity();
    if (isValid) {
      setEmptyRateToZero(hourlyRate, setHourlyRate);
      setEmptyRateToZero(dailyRate, setDailyRate);
      setEmptyRateToZero(weeklyRate, setWeeklyRate);
      setEmptyRateToZero(monthlyRate, setMonthlyRate);
      setEmptyRateToZero(deliveryRate, setDeliveryRate);
      setPrices();
      navigation.navigate(ScreenNameConstants.RentalDetails, {rental});
    } else {
      Alert.alert(
        'Invalid options',
        'You must select one rental rate option and one delivery option.',
      );
    }
  };
  // TODO: add is firm on price
  const setPrices = (): void => {
    rental.amountHourly = hourlyCheckbox ? Number(hourlyRate) : undefined;
    rental.amountDaily = dailyCheckbox ? Number(dailyRate) : undefined;
    rental.amountWeekly = weeklyCheckbox ? Number(weeklyRate) : undefined;
    rental.amountMonthly = monthlyCheckbox ? Number(monthlyRate) : undefined;
  };
  const setEmptyRateToZero = (
    rate: string,
    setRate: React.Dispatch<React.SetStateAction<string>>,
  ): void => {
    if (rate === '') {
      setRate('0');
    }
  };

  const getValidity = (): boolean => {
    const isOneRentalRateSelected: boolean =
      hourlyCheckbox || dailyCheckbox || weeklyCheckbox || monthlyCheckbox;
    const isADeliveryOptionSelected: boolean = willDeliver || willPickUp;
    return isOneRentalRateSelected && isADeliveryOptionSelected;
  };

  const applySuggestedRates = () => {
    setHourlyRate(suggestedHourlyRate);
    setDailyRate(suggestedDailyRate);
    setWeeklyRate(suggestedWeeklyRate);
    setMonthlyRate(suggestedMonthlyRate);
  };

  return {
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
  };
};

export default usePrices;
