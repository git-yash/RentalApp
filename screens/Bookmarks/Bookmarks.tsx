import React from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Colors from '../../assets/Colors';
import bookmarksStyle from './Bookmarks.style';
import useBookmarks from './useBookmarks';
import MiniRentalExploreView from '../../components/MiniRentalExploreView/MiniRentalExploreView';

const Bookmarks = (props: {navigation: any}) => {
  const {bookmarkedPosts, position} = useBookmarks();
  const doesHaveBookmarks: boolean = bookmarkedPosts.length > 0;

  return (
    <SafeAreaView>
      <View style={bookmarksStyle.mainContainer}>
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
        {doesHaveBookmarks && (
          <FlatList
            data={bookmarkedPosts}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <MiniRentalExploreView
                rental={item}
                currentLatitude={position?.coords.latitude as number}
                currentLongitude={position?.coords.longitude as number}
                navigation={props.navigation}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Bookmarks;
