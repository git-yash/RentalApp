import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

const Details = (props: {navigation: any; route: any}) => {
  const {rental} = props.route.params;
  useEffect(() => {
    console.log(rental);
  }, []);
  return (
    <SafeAreaView>
      <Text>hello</Text>
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
