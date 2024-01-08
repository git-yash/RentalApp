import React, {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const Prices = (props: {navigation: any}) => {
  // set header left to x mark
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => props.navigation.goBack()}>
          <FontAwesomeIcon icon={faAngleLeft} size={25} />
        </Pressable>
      ),
    });
  }, []);
  return <View />;
};

export default Prices;
