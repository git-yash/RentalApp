import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';

const Explore = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <Button
        title="Show modal"
        onPress={() => setModalVisible(!isModalVisible)}
      />
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default Explore;
