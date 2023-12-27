import React, {useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import searchBarStyles from '../SearchBar/SearchBar.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';

const SearchBarInput = (props: {searchText: string; setSearchText: any}) => {
  const [isSearchInputFocused, setIsSearchInputFocused] =
    useState<boolean>(false);
  return (
    <View style={searchBarStyles.searchBarContainer}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size={19}
        color={isSearchInputFocused ? Colors.green : Colors.gray500}
        style={searchBarStyles.searchBarIcon}
      />
      <TextInput
        placeholder={'Search by keyword...'}
        autoFocus={true}
        style={searchBarStyles.searchBarInput}
        placeholderTextColor={Colors.gray600}
        onFocus={() => setIsSearchInputFocused(true)}
        onEndEditing={() => setIsSearchInputFocused(false)}
        onChangeText={text => props.setSearchText(text)}
        value={props.searchText}
      />
      <Pressable
        style={{marginRight: 10}}
        onPress={() => props.setSearchText('')}>
        <FontAwesomeIcon icon={faXmark} size={20} color={Colors.gray600} />
      </Pressable>
    </View>
  );
};

export default SearchBarInput;
