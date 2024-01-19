import {useState} from 'react';
import {Alert} from 'react-native';

const usePrices = (itemWorthNumber: number) => {
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
      navigation.navigate('Details');
    } else {
      Alert.alert(
        'Invalid options',
        'You must select one rental rate option and one delivery option.',
      );
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
