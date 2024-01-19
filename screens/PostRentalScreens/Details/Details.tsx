import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const Details = (props: {navigation: any}) => {
  return (
    <SafeAreaView>
      <Text>Details</Text>
      {/*<ContinueWithStepIndicatorView*/}
      {/*  navigation={props.navigation}*/}
      {/*  currentStepPosition={2}*/}
      {/*  onContinuePress={() => {}}*/}
      {/*  continuePressableText={'Continue'}*/}
      {/*/>*/}
    </SafeAreaView>
  );
};

export default Details;
