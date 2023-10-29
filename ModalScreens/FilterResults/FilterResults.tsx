import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {Text, TouchableOpacity, View} from 'react-native';
import exploreStyles from '../../screens/Explore/Explore.style';
import logInOrSignUpStyles from '../LogInOrSignUp/LogInOrSignUp.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import {Slider} from '@miblanchard/react-native-slider';
import Colors from '../../assets/Colors';
import DropDownPicker from 'react-native-dropdown-picker';
import {CheckIcon, Select} from 'native-base';
import {Dropdown} from 'react-native-element-dropdown';

const FilterResults = (props: {
  isModalVisible: boolean;
  setIsModalVisible: any;
}) => {
  const distancesInMiles = [5, 10, 15, 20, 25];
  const distancesInKM = [10, 15, 25, 30, 40];
  const [searchRadius, setSearchRadius] = useState(10);
  const [unitOfMeasurement, setUnitOfMeasurement] = useState('Miles');
  const [sortBy, setSortBy] = useState('Distance');
  const data = [
    {label: 'Most Recent', value: '1'},
    {label: 'Price: Lowest to Highest', value: '2'},
    {label: 'Price: Highest to Lowest', value: '3'},
    {label: 'Distance', value: '4'},
  ];
  return (
    <Modal
      isVisible={props.isModalVisible}
      onSwipeComplete={() => {
        props.setIsModalVisible(false);
        ReactNativeHapticFeedback.trigger('impactMedium', Util.options);
      }}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      style={exploreStyles.modal}>
      <View style={exploreStyles.modalView}>
        <View style={logInOrSignUpStyles.headerContainer}>
          <View style={logInOrSignUpStyles.iconContainer}>
            <TouchableOpacity
              style={logInOrSignUpStyles.dismissPressable}
              onPress={() => props.setIsModalVisible(false)}>
              <FontAwesomeIcon icon={faXmark} size={20} />
            </TouchableOpacity>
          </View>
          <View style={logInOrSignUpStyles.textContainer}>
            <Text style={logInOrSignUpStyles.text}>Filters</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            padding: 15,
          }}>
          <Dropdown
            data={data}
            maxHeight={300}
            fontFamily={'Poppins-Regular'}
            style={{
              borderWidth: 2,
              borderColor: Colors.gray300,
              padding: 7,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 10,
            }}
            labelField="label"
            valueField="value"
            value={sortBy}
            onChange={item => {
              setSortBy(item.label);
            }}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              paddingTop: 15,
              fontWeight: '500',
              fontSize: 15,
            }}>
            Search Radius ({unitOfMeasurement}):
          </Text>
          <Slider
            trackMarks={[0, 0.25, 0.5, 0.75, 1]}
            step={0.25}
            value={(searchRadius - 5) / 20}
            onSlidingComplete={value => {
              setSearchRadius(value[0] * 20 + 5);
            }}
            thumbTintColor={Colors.green}
            minimumTrackTintColor={Colors.green}
            trackClickable={true}
            renderTrackMarkComponent={index => {
              return (
                <View style={{paddingTop: 40, paddingLeft: 3}}>
                  <Text style={{fontFamily: 'Poppins-Regular'}}>
                    {unitOfMeasurement === 'Miles'
                      ? distancesInMiles[index]
                      : distancesInKM[index]}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default FilterResults;
