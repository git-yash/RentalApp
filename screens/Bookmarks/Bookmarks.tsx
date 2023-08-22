import React, {useEffect} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import bookmarksStyle from './Bookmarks.style';
import useBookmarks from './useBookmarks';
import MiniRentalExploreView from '../../components/MiniRentalExploreView/MiniRentalExploreView';

const Bookmarks = (props: {navigation: any}) => {
  const {bookmarkedPosts, position, refreshing, onRefresh} = useBookmarks(
    props.navigation,
  );
  const doesHaveBookmarks: boolean = bookmarkedPosts.length > 0;

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={bookmarksStyle.mainContainer}>
        <Text style={bookmarksStyle.bookmarksText}>Bookmarks</Text>
        {!doesHaveBookmarks && (
          <View>
            <View style={bookmarksStyle.noBookmarksView}>
              <Text style={bookmarksStyle.noBookmarksText}>
                You don't have any bookmarks yet! ☹️
              </Text>
            </View>
          </View>
        )}
        {bookmarkedPosts.map((item, index) => {
          return (
            <MiniRentalExploreView
              rental={item}
              key={index}
              currentLatitude={position?.coords.latitude as number}
              currentLongitude={position?.coords.longitude as number}
              navigation={props.navigation}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmarks;
