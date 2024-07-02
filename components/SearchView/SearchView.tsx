import React from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import SearchBarInput from '../SearchBarInput/SearchBarInput';
import CustomDateAndTimeInput from '../CustomDateAndTimeInput/CustomDateAndTimeInput';
import Collapsible from 'react-native-collapsible';
import useSearchView from './useSearchView';
import searchViewStyle from './SearchView.style';
import DismissKeyboardView from '../DismissKeyboardView';
import {useNavigation, useRoute} from '@react-navigation/native';

const SearchView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {setRentals, setShowSearchResults} = route.params;
  const {
    searchText,
    setSearchText,
    setIsCollapsed,
    isCollapsed,
    timeText,
    setStartDateTime,
    startDateTime,
    isSearchTextValid,
    setEndDateTime,
    endDateTime,
    onClear,
    areDatesValid,
    onApply,
    onClearAll,
    onSearchButtonPress,
  } = useSearchView();

  return (
    <DismissKeyboardView>
      <SafeAreaView style={searchViewStyle.safeArea}>
        <SearchBarInput searchText={searchText} setSearchText={setSearchText} />
        {!isSearchTextValid && (
          <Text style={searchViewStyle.errorText}>
            You must enter search text!
          </Text>
        )}
        <View style={searchViewStyle.collapsibleContainer}>
          <Pressable onPress={() => setIsCollapsed(!isCollapsed)}>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={searchViewStyle.collapsibleTitleText}>
                  When do you want it?
                </Text>
                <FontAwesomeIcon
                  icon={isCollapsed ? faAngleDown : faAngleUp}
                  size={25}
                  style={{marginRight: 15, marginTop: 15}}
                />
              </View>
              <Text style={searchViewStyle.timeText}>{timeText}</Text>
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
              <Text style={searchViewStyle.errorText}>
                Start date must be greater than end date!
              </Text>
            )}
            <View style={searchViewStyle.collapsibleBottomContainer}>
              <TouchableOpacity onPress={onClear}>
                <Text style={searchViewStyle.clearText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onApply}
                style={searchViewStyle.applyButton}>
                <Text style={searchViewStyle.applyText}>Apply</Text>
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
        <View style={searchViewStyle.footerContainer}>
          <TouchableOpacity onPress={onClearAll}>
            <Text style={searchViewStyle.clearText}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={searchViewStyle.searchButton}
            onPress={() =>
              onSearchButtonPress(navigation, setRentals, setShowSearchResults)
            }>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              color={'white'}
              style={searchViewStyle.searchIcon}
            />
            <Text style={searchViewStyle.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default SearchView;
