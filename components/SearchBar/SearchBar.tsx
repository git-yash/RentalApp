import React from 'react';
import {TextInput, View} from 'react-native';
import searchBarStyles from './SearchBar.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Colors from '../../assets/Colors';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <View style={searchBarStyles.searchBarContainer}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size={18}
        color={Colors.green}
        style={searchBarStyles.searchBarIcon}
      />
      <TextInput
        placeholder={'Search...'}
        style={searchBarStyles.searchBarInput}
        placeholderTextColor={Colors.gray600}
      />
    </View>
  );
};

export default SearchBar;
