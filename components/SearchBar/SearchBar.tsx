import React, {useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import searchBarStyles from './SearchBar.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Colors from '../../assets/Colors';
import {faFilter, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import FilterResults from '../../ModalScreens/FilterResults/FilterResults';

const SearchBar = () => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  return (
    <View style={searchBarStyles.searchBarContainer}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size={19}
        color={Colors.gray500}
        style={searchBarStyles.searchBarIcon}
      />
      <TextInput
        placeholder={'Search...'}
        style={searchBarStyles.searchBarInput}
        placeholderTextColor={Colors.gray600}
      />
      <Pressable
        onPress={() => setIsFilterModalVisible(true)}
        style={searchBarStyles.filterPressable}>
        <FontAwesomeIcon icon={faFilter} size={20} color={Colors.gray600} />
      </Pressable>
      <FilterResults
        isModalVisible={isFilterModalVisible}
        setIsModalVisible={setIsFilterModalVisible}
      />
    </View>
  );
};

export default SearchBar;
