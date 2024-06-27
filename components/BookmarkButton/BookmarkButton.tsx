import React from 'react';
import {TouchableOpacity} from 'react-native';
import miniRentalExploreViewStyle from '../MiniRentalExploreView/MiniRentalExploreView.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons';
import Colors from '../../assets/Colors';
import {Rental} from '../../src/API';
import useBookmarkButton from './useBookmarkButton';

const BookmarkButton = (props: {
  currentLatitude: number;
  currentLongitude: number;
  rental: Rental;
  iconSize: number;
}) => {
  const {handleHeartPress, isBookmarked} = useBookmarkButton(props.rental);

  return (
    <TouchableOpacity
      style={miniRentalExploreViewStyle.heartButton}
      onPress={() => handleHeartPress()}>
      <FontAwesomeIcon
        icon={isBookmarked ? solidHeart : regularHeart}
        color={Colors.green}
        size={props.iconSize}
        style={miniRentalExploreViewStyle.heartIcon}
      />
    </TouchableOpacity>
  );
};

export default BookmarkButton;
