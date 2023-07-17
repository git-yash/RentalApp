import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';
import auth from '@react-native-firebase/auth';

const Explore = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!auth().currentUser) {
      setModalVisible(true);
    } else {
      console.log(auth().currentUser?.email);
    }
  }, []);

  return (
    <SafeAreaView>
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default Explore;
