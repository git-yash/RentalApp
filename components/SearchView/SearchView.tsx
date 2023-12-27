import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';
import SearchBarInput from '../SearchBarInput/SearchBarInput';
import CustomDateAndTimeInput from '../CustomDateAndTimeInput/CustomDateAndTimeInput';
import Collapsible from 'react-native-collapsible';

const SearchView = (props: {setIsSearchFocused: any}) => {
  const [areDatesApplied, setAreDatesApplied] = useState<boolean>(false);
  const [timeText, setTimeText] = useState('Any time');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>('');
  const [startDateTime, setStartDateTime] = useState<Date | undefined>(
    new Date(),
  );
  const [endDateTime, setEndDateTime] = useState<Date | undefined>(new Date());
  const [areDatesValid, setAreDatesValid] = useState<boolean>(true);
  const formattedDateOptions: Intl.DateTimeFormatOptions = {
    month: 'short', // Short month name (three letters)
    day: 'numeric', // Day of the month
    hour: 'numeric', // Hour
    minute: 'numeric', // Minute
    hour12: true, // Use 12-hour clock
  };
  return (
    <SafeAreaView
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        backgroundColor: 'white',
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.setIsSearchFocused(false)}
          style={{width: 40, height: 40, margin: 10}}>
          <FontAwesomeIcon icon={faXmark} size={25} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
              marginBottom: 15,
              marginRight: 60,
            }}>
            Search
          </Text>
        </View>
      </View>
      <View>
        <SearchBarInput searchText={searchText} setSearchText={setSearchText} />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          margin: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          padding: 5,
        }}>
        <Pressable onPress={() => setIsCollapsed(!isCollapsed)}>
          <View>
            <Text
              style={{
                paddingLeft: 15,
                paddingTop: 15,
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                fontWeight: '500',
              }}>
              When do you want it?
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                marginLeft: 15,
                marginTop: 10,
                marginBottom: 10,
              }}>
              {timeText}
            </Text>
          </View>
        </Pressable>
        <Collapsible collapsed={isCollapsed}>
          <CustomDateAndTimeInput
            minuteInterval={15}
            setDateTime={setStartDateTime}
            dateTime={startDateTime}
            dateTitle={'Start date'}
            timeTitle={'Start time'}
          />
          <CustomDateAndTimeInput
            minuteInterval={15}
            setDateTime={setEndDateTime}
            dateTime={endDateTime}
            dateTitle={'End date'}
            timeTitle={'End time'}
          />
          {!areDatesValid && (
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: Colors.invalidRed,
                marginLeft: 15,
                marginBottom: 15,
              }}>
              Start date must be greater than end date!
            </Text>
          )}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopWidth: 2,
              borderColor: Colors.gray300,
              paddingTop: 5,
              marginTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                setStartDateTime(new Date());
                setEndDateTime(new Date());
                setTimeText('Any time');
              }}>
              <Text
                style={{
                  padding: 15,
                  fontFamily: 'Poppins-Regular',
                  textDecorationLine: 'underline',
                  fontWeight: '500',
                }}>
                Clear
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (
                  !startDateTime ||
                  !endDateTime ||
                  startDateTime.getTime() >= endDateTime.getTime()
                ) {
                  setAreDatesValid(false);
                  return;
                }
                setAreDatesApplied(true);
                setAreDatesValid(true);
                let startDateTimeText = startDateTime?.toLocaleString(
                  'en-US',
                  formattedDateOptions,
                );
                let endDateTimeText = endDateTime?.toLocaleString(
                  'en-US',
                  formattedDateOptions,
                );
                setTimeText(startDateTimeText + ' to ' + endDateTimeText);
              }}
              style={{
                backgroundColor: 'black',
                padding: 10,
                marginRight: 5,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </Collapsible>
      </View>
      {/*<TouchableOpacity*/}
      {/*  style={{*/}
      {/*    alignItems: 'center',*/}
      {/*    backgroundColor: 'black',*/}
      {/*    borderRadius: 15,*/}
      {/*    marginLeft: 10,*/}
      {/*    padding: 10,*/}
      {/*    width: 120,*/}
      {/*  }}>*/}
      {/*  <Text*/}
      {/*    style={{*/}
      {/*      fontFamily: 'Poppins-SemiBold',*/}
      {/*      fontSize: 15,*/}
      {/*      color: 'white',*/}
      {/*    }}>*/}
      {/*    Apply Range*/}
      {/*  </Text>*/}
      {/*</TouchableOpacity>*/}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          flex: 1,
          borderTopWidth: 2,
          borderTopColor: Colors.gray200,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            setSearchText('');
            setStartDateTime(new Date());
            setEndDateTime(new Date());
            setTimeText('Any time');
          }}>
          <Text
            style={{
              padding: 15,
              fontFamily: 'Poppins-Regular',
              textDecorationLine: 'underline',
              fontWeight: '500',
            }}>
            Clear All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 15,
            backgroundColor: Colors.green,
            margin: 5,
            marginRight: 5,
            flexDirection: 'row',
          }}
          onPress={() => {
            props.setIsSearchFocused(false);
          }}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color={'white'}
            style={{alignSelf: 'center', marginLeft: 10}}
          />
          <Text
            style={{
              color: 'white',
              padding: 10,
              fontFamily: 'Poppins-Regular',
              fontWeight: '500',
              fontSize: 15,
            }}>
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SearchView;
