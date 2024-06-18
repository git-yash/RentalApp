import React from 'react';
import {View} from 'react-native';
import CustomStepIndicator from '../../../../components/CustomStepIndicator/CustomStepIndicator';
import ContinuePressable from '../../../../components/ContinuePressable/ContinuePressable';
import continueWithStepIndicatorViewStyle from './ContinueWithStepIndicatorView.style';
import ScreenNameConstants from '../../../ScreenNameConstants';

const ContinueWithStepIndicatorView = (props: {
  navigation: any;
  currentStepPosition: number;
  onContinuePress: () => void;
  continuePressableText: string;
}) => {
  const labels: string[] = ['Post', 'Prices', 'Details', 'Review'];
  return (
    <View style={continueWithStepIndicatorViewStyle.bottomView}>
      <CustomStepIndicator
        labels={labels}
        currentPosition={props.currentStepPosition}
        onPress={(step: number) => {
          if (step === props.currentStepPosition) {
            return;
          }
          if (step === 0) {
            props.navigation.navigate(ScreenNameConstants.PostModal);
          } else {
            props.navigation.navigate(labels[step]);
          }
        }}
      />
      <ContinuePressable
        onPress={props.onContinuePress}
        isDisabled={false}
        text={props.continuePressableText}
        isLoading={false}
      />
    </View>
  );
};

export default ContinueWithStepIndicatorView;
