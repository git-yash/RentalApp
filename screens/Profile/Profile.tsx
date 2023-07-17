import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';

const Profile = (props: {navigation: any}) => {
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
      {auth().currentUser && (
        <Button
          title="Sign out"
          onPress={() => {
            auth()
              .signOut()
              .then(() => {
                setModalVisible(true);
                console.log('logged in ' + auth().currentUser?.email);
              });
          }}
        />
      )}
      {!auth().currentUser && (
        <Button
          title={'Log in or Sign up'}
          onPress={() => setModalVisible(true)}
        />
      )}
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default Profile;
