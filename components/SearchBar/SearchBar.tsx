import React from 'react';
import {Pressable, View} from 'react-native';
import searchBarStyles from './SearchBar.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Colors from '../../assets/Colors';
import {faFilter, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {Text} from 'native-base';
import ScreenNameConstants from '../../screens/ScreenNameConstants';

const SearchBar = (props: {navigation: any; onSearchBarPress: any}) => {
  return (
    <View style={searchBarStyles.searchBarContainer}>
      <Pressable
        onPress={() => {
          props.onSearchBarPress();
        }}
        style={searchBarStyles.searchPressable}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size={19}
          color={Colors.gray500}
          style={searchBarStyles.searchBarIcon}
        />
        <Text style={searchBarStyles.searchBarInput}>Search...</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          props.navigation.navigate(ScreenNameConstants.FilterResults)
        }
        style={searchBarStyles.filterPressable}>
        <FontAwesomeIcon icon={faFilter} size={20} color={Colors.gray600} />
      </Pressable>
    </View>
  );
};

export default SearchBar;
