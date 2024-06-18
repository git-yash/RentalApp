import React from 'react';
import {Pressable, Text, View} from 'react-native';
import useProfile from '../../screens/Profile/useProfile';
import Colors from '../../assets/Colors';

const LogInToViewScreen = (props: {message: string}) => {
  const {isModalVisible, setModalVisible} = useProfile();

  return (
    <View style={{paddingTop: '50%', alignSelf: 'center', paddingRight: 15}}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 20,
          fontWeight: '500',
        }}>
        {props.message}
      </Text>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          borderRadius: 10,
          marginTop: 10,
          width: 90,
          height: 50,
          backgroundColor: Colors.green,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            textAlign: 'center',
            fontSize: 16,
            color: 'white',
          }}>
          Log In
        </Text>
      </Pressable>
      {/*<LogInOrSignUp*/}
      {/*  isModalVisible={isModalVisible}*/}
      {/*  setIsModalVisible={setModalVisible}*/}
      {/*/>*/}
    </View>
  );
};

export default LogInToViewScreen;
