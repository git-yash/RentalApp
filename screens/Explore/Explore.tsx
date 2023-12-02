import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';
import MapView, {MapMarker, PROVIDER_GOOGLE} from 'react-native-maps';
import {faMap} from '@fortawesome/free-solid-svg-icons';
import {Spinner} from 'native-base';
import Colors from '../../assets/Colors';
import SearchBar from '../../components/SearchBar/SearchBar';
import CustomMapMarker from '../../components/CustomMapMarker/CustomMapMarker';
import MiniRentalExploreView from '../../components/MiniRentalExploreView/MiniRentalExploreView';
import useExplore from './useExplore';
import CategoryTabBar from '../../components/CategoryTabBar/CategoryTabBar';
import exploreStyles from './Explore.style';
import UserPositionCustomMapMarker from '../../components/UserPositionCustomMapMarker/UserPositionCustomMapMarker';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Explore = (props: {navigation: any}) => {
  const {
    isModalVisible,
    setModalVisible,
    position,
    rentals,
    snapPoints,
    handleSheetChanges,
    isListView,
    bottomSheetRef,
    currentItemIndex,
    onViewableItemsChanged,
    canShowMap,
    mapStyle,
    mapRef,
    flatListRef,
  } = useExplore();

  return (
    <View>
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
      {canShowMap && (
        <>
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
            style={exploreStyles.mapView}>
            {rentals?.map((rental, index) => (
              <MapMarker
                coordinate={{
                  latitude: rental.location.latitude as number,
                  longitude: rental.location.longitude as number,
                }}
                key={index}
                onPress={() => {
                  flatListRef.current?.scrollToIndex({index: index});
                }}>
                <CustomMapMarker
                  price={rental.prices[0]}
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
          <GestureHandlerRootView
            style={exploreStyles.listModalContainer}
            pointerEvents={'box-none'}>
            <BottomSheet
              ref={bottomSheetRef}
              handleIndicatorStyle={{backgroundColor: Colors.gray400}}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}>
              <View style={exploreStyles.listModalContentContainer}>
                <Text style={{fontFamily: 'Poppins-Regular'}}>
                  View all {rentals.length} rentals
                </Text>
                <FlatList
                  style={{marginTop: 15}}
                  data={rentals}
                  keyExtractor={item => item.id}
                  contentContainerStyle={{paddingBottom: '20%'}}
                  renderItem={({item}) => (
                    <MiniRentalExploreView
                      rental={item}
                      currentLongitude={position?.coords.longitude as number}
                      currentLatitude={position?.coords.latitude as number}
                      navigation={props.navigation}
                    />
                  )}
                />
                {isListView && (
                  <TouchableOpacity
                    onPress={() => bottomSheetRef.current?.snapToIndex(0)}
                    style={{
                      position: 'absolute',
                      zIndex: 5,
                      bottom: '5%',
                      padding: 10,
                      borderRadius: 50,
                      alignSelf: 'center',
                      backgroundColor: 'black',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        Show Map
                      </Text>
                      <FontAwesomeIcon
                        icon={faMap}
                        color={'white'}
                        style={{marginLeft: 5, marginTop: 2}}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </BottomSheet>
          </GestureHandlerRootView>
        </>
      )}
      <View style={exploreStyles.categoryAndSearchView}>
        <SearchBar />
        <CategoryTabBar />
      </View>
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
      </View>
      {!canShowMap && <Spinner color={Colors.green} />}
    </View>
  );
};

export default Explore;
