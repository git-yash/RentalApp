import React from 'react';
import {Pressable, View} from 'react-native';
import searchBarStyles from './SearchBar.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Colors from '../../assets/Colors';
import {faFilter, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {Text} from 'native-base';

const SearchBar = (props: {
  isSearchFocused: boolean;
  setIsSearchFocused: any;
  navigation: any;
}) => {
  return (
    <View style={searchBarStyles.searchBarContainer}>
      <Pressable
        onPress={() => props.setIsSearchFocused(true)}
        style={searchBarStyles.searchPressable}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size={19}
          color={props.isSearchFocused ? Colors.green : Colors.gray500}
          style={searchBarStyles.searchBarIcon}
        />
        <Text style={searchBarStyles.searchBarInput}>Search...</Text>
      </Pressable>
      {!props.isSearchFocused && (
        <Pressable
          onPress={() => props.navigation.navigate('Filter Results')}
          style={searchBarStyles.filterPressable}>
          <FontAwesomeIcon icon={faFilter} size={20} color={Colors.gray600} />
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;
