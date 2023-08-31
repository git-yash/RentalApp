import React from 'react';
import {TouchableOpacity} from 'react-native';
import miniRentalExploreViewStyle from '../MiniRentalExploreView/MiniRentalExploreView.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons';
import Colors from '../../assets/Colors';
import {Rental} from '../../modals/Rental';
import useMiniRentalExploreView from '../MiniRentalExploreView/useMiniRentalExploreView';
import MiniRentalExploreViewService from '../MiniRentalExploreView/MiniRentalExploreView.service';

const BookmarkButton = (props: {
  currentLatitude: number;
  currentLongitude: number;
  rental: Rental;
  iconSize: number;
}) => {
  const miniRentalExploreViewService = new MiniRentalExploreViewService();
  const {handleHeartPress, isBookmarked} = useMiniRentalExploreView(
    props.currentLatitude,
    props.currentLongitude,
    props.rental.address,
    props.rental,
    miniRentalExploreViewService,
  );
  return (
    <TouchableOpacity
      style={miniRentalExploreViewStyle.heartButton}
      onPress={() => handleHeartPress()}>
      <FontAwesomeIcon
        icon={
          isBookmarked || props.rental.isBookmarked ? solidHeart : regularHeart
        }
        color={Colors.green}
        size={props.iconSize}
        style={miniRentalExploreViewStyle.heartIcon}
      />
    </TouchableOpacity>
  );
};

export default BookmarkButton;
