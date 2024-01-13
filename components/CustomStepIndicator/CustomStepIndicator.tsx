import React from 'react';
import Colors from '../../assets/Colors';
import StepIndicator from 'react-native-step-indicator';

const CustomStepIndicator = (props: {
  labels: string[];
  currentPosition: number;
  onPress: any;
}) => {
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: Colors.green,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: Colors.green,
    stepStrokeUnFinishedColor: Colors.gray500,
    separatorFinishedColor: Colors.green,
    separatorUnFinishedColor: Colors.gray500,
    stepIndicatorFinishedColor: Colors.green,
    stepIndicatorUnFinishedColor: 'white',
    stepIndicatorCurrentColor: 'white',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: Colors.green,
    stepIndicatorLabelFinishedColor: 'white',
    stepIndicatorLabelUnFinishedColor: Colors.gray400,
    labelColor: Colors.gray500,
    labelSize: 13,
    currentStepLabelColor: Colors.green,
  };
  return (
    <StepIndicator
      labels={props.labels}
      stepCount={props.labels.length}
      currentPosition={props.currentPosition}
      onPress={props.onPress}
      customStyles={customStyles}
    />
  );
};

export default CustomStepIndicator;
