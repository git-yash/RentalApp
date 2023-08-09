import React from 'react';
import {View} from 'react-native';
import Colors from '../../assets/Colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const UserPositionCustomMapMarker = () => {
  return (
    <View
      style={{
        borderRadius: 100,
        borderWidth: 5,
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderColor: Colors.green,
        justifyContent: 'center',
      }}>
      <FontAwesomeIcon
        icon={faUser}
        color={Colors.green}
        style={{alignSelf: 'center'}}
      />
    </View>
  );
};

export default UserPositionCustomMapMarker;
