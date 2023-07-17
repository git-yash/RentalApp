import React, {useCallback, useEffect, useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';
import {useFocusEffect} from '@react-navigation/native';
import TabBarIcon from '../../components/TabBarIcon/TabBarIcon';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser as solidUser} from '@fortawesome/free-solid-svg-icons';
import {faUser as regularUser} from '@fortawesome/free-regular-svg-icons';

const Profile = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  library.add(solidUser, regularUser);

  useEffect(() => {
    if (!auth().currentUser) {
      setModalVisible(true);
    } else {
      console.log(auth().currentUser?.email);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      const isLoggedIn = auth().currentUser;

      props.navigation.setOptions({
        tabBarLabel: isLoggedIn ? 'Profile' : 'Log in',
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            isFocused={focused}
            icon={isLoggedIn ? solidUser : regularUser}
          />
        ),
      });
    }, [props.navigation, isModalVisible]),
  );
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
