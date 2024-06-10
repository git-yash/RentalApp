import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ContinueWithStepIndicatorView from '../components/ContinueWithStepIndicatorView/ContinueWithStepIndicatorView';
import DismissKeyboardView from '../../../components/DismissKeyboardView';
import AutoCompleteTextInput from '../../../components/AutoCompleteTextInput/AutoCompleteTextInput';

const Details = (props: {navigation: any; route: any}) => {
  const {rental} = props.route.params;
  const [addressText, setAddressText] = useState<string>('');
  return (
    <DismissKeyboardView>
      <SafeAreaView style={{flex: 1}}>
        <AutoCompleteTextInput
          placeholderText={'Enter address...'}
          titleText={'Item address'}
          addressText={addressText}
          setAddressText={setAddressText}
        />
        <ContinueWithStepIndicatorView
          navigation={props.navigation}
          currentStepPosition={2}
          onContinuePress={() => {}}
          continuePressableText={'Continue'}
        />
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default Details;
