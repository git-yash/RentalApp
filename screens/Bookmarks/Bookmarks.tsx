import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import bookmarksStyle from './Bookmarks.style';
import useBookmarks from './useBookmarks';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import RentalCard from '../../components/RentalCard/RentalCard';
import ScreenNameConstants from '../ScreenNameConstants';

const Bookmarks = (props: {navigation: any}) => {
  const {position, refreshing, onRefresh, bookmarkedRentals} = useBookmarks();
  const doesHaveBookmarks: boolean = bookmarkedRentals.length > 0;
  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={bookmarksStyle.mainContainer}>
        <ScreenTitle title={ScreenNameConstants.Bookmarks} />
        {!doesHaveBookmarks && (
          <View>
            <View style={bookmarksStyle.noBookmarksView}>
              <Text style={bookmarksStyle.noBookmarksText}>
                You don't have any bookmarks yet! ☹️
              </Text>
            </View>
          </View>
        )}
        {bookmarkedRentals.map((item, index) => {
          return (
            <RentalCard
              rental={item}
              key={index}
              currentLatitude={position?.coords.latitude}
              currentLongitude={position?.coords.longitude}
              navigation={props.navigation}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmarks;
