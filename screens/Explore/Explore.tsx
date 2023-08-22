import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, SafeAreaView, Text, View} from 'react-native';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';
import MapView, {MapMarker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Spinner} from 'native-base';
import Colors from '../../assets/Colors';
import SearchBar from '../../components/SearchBar/SearchBar';
import CustomMapMarker from '../../components/CustomMapMarker/CustomMapMarker';
import MiniRentalExploreView from '../../components/MiniRentalExploreView/MiniRentalExploreView';
import useExplore from './useExplore';
import CategoryTabBar from '../../components/CategoryTabBar/CategoryTabBar';
import exploreStyles from './Explore.style';
import UserPositionCustomMapMarker from '../../components/UserPositionCustomMapMarker/UserPositionCustomMapMarker';
import {useIsFocused} from '@react-navigation/native';

const Explore = (props: {navigation: any}) => {
  const {
    isModalVisible,
    setModalVisible,
    position,
    rentals,
    currentItemIndex,
    onViewableItemsChanged,
    canShowMap,
    mapStyle,
    mapRef,
    flatListRef,
  } = useExplore();

  return (
    <View style={{flex: 1}}>
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
      {canShowMap && (
        <MapView
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          ref={mapRef}
          initialRegion={{
            latitude: position?.coords.latitude as number,
            longitude: position?.coords.longitude as number,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}
          style={{
            flex: 2,
          }}>
          {rentals?.map((rental, index) => (
            <MapMarker
              coordinate={{
                latitude: rental.location.latitude as number,
                longitude: rental.location.longitude as number,
              }}
              key={index}
              onPress={() => {
                flatListRef.current.scrollToIndex({index: index});
              }}>
              <CustomMapMarker
                price={rental.pricePerHour}
                isSelected={currentItemIndex === index}
                key={index}
              />
            </MapMarker>
          ))}
          <MapMarker
            coordinate={{
              latitude: position?.coords.latitude as number,
              longitude: position?.coords.longitude as number,
            }}>
            <UserPositionCustomMapMarker />
          </MapMarker>
        </MapView>
      )}
      <View style={exploreStyles.flatListView}>
        <FlatList
          data={rentals}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          snapToInterval={Dimensions.get('window').width * 0.9}
          decelerationRate={0}
          snapToAlignment={'center'}
          keyExtractor={item => item.id}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
          renderItem={({item}) => (
            <MiniRentalExploreView
              rental={item}
              currentLongitude={position?.coords.longitude as number}
              currentLatitude={position?.coords.latitude as number}
              navigation={props.navigation}
            />
          )}
        />
        <View style={exploreStyles.categoryAndSearchView}>
          <CategoryTabBar />
          <SearchBar />
        </View>
      </View>
      {!canShowMap && <Spinner color={Colors.green} />}
    </View>
  );
};

export default Explore;
