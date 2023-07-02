import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const Explore = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => {
          setModalVisible(false);
          ReactNativeHapticFeedback.trigger('impactMedium', options);
        }}
        useNativeDriverForBackdrop
        swipeDirection={['down']}
        style={styles.modal}>
        <View style={styles.modalView}>
          <View style={styles.grayLine} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    height: '95%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  grayLine: {
    backgroundColor: '#d5d7db',
    height: 4,
    width: 40,
    alignSelf: 'center',
    borderRadius: 2,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default Explore;
