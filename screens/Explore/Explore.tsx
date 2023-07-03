import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import exploreStyles from './Explore.style';
import LogInOrSignUp from '../LogInOrSignUp/LogInOrSignUp';

const Explore = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <Button
        title="Show modal"
        onPress={() => setModalVisible(!isModalVisible)}
      />
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
    </View>
  );
};

export default Explore;
