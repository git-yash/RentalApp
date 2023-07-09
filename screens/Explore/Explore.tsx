import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import exploreStyles from './Explore.style';
import LogInOrSignUp from '../LogInOrSignUp/LogInOrSignUp';
import Colors from "../../assets/Colors";

const Explore = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={{flex: 1}}>
      <Button
        title="Show modal"
        onPress={() => setModalVisible(!isModalVisible)}
      />
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
    </ScrollView>
  );
};

export default Explore;
