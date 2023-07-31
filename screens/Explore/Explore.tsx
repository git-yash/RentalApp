import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, View} from 'react-native';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';
import MapView, {MapMarker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Spinner} from 'native-base';
import Colors from '../../assets/Colors';
import SearchBar from '../../components/SearchBar/SearchBar';
import CustomMapMarker from '../../components/CustomMapMarker/CustomMapMarker';
import MiniRentalExploreView from '../../components/MiniRentalExploreView/MiniRentalExploreView';
import useExplore from './useExplore';

const Explore = (props: {navigation: any}) => {
  const {
    isModalVisible,
    setModalVisible,
    position,
    rentals,
    selectedRental,
    setSelectedRental,
    canShowMap,
    mapStyle,
  } = useExplore();

  return (
    <SafeAreaView style={{flex: 1}}>
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
      <View style={{flex: 0.4}}>
        <SearchBar />
      </View>
      {canShowMap && (
        <MapView
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: position?.coords.latitude as number,
            longitude: position?.coords.longitude as number,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}
          style={{flex: 2}}>
          {/*<MapCircle*/}
          {/*  center={{*/}
          {/*    latitude: position?.coords.latitude as number,*/}
          {/*    longitude: position?.coords.longitude as number,*/}
          {/*  }}*/}
          {/*  radius={8046.72} // 5 miles*/}
          {/*  strokeColor={Colors.green}*/}
          {/*  strokeWidth={2}*/}
          {/*/>*/}
          {rentals?.map((rental, index) => (
            <MapMarker
              coordinate={{
                latitude: rental.location.latitude as number,
                longitude: rental.location.longitude as number,
              }}
              key={index}
              onPress={() => {
                setSelectedRental(rental);
              }}>
              <CustomMapMarker
                price={rental.pricePerHour}
                isSelected={rental.id === selectedRental?.id}
                key={index}
              />
            </MapMarker>
          ))}
        </MapView>
      )}
      <View style={{flex: 0.7}}>
        <ScrollView
          horizontal={true}
          decelerationRate={0}
          snapToInterval={Dimensions.get('window').width * 0.9}
          snapToAlignment={'center'}>
          {rentals?.map((rental, index) => (
            <MiniRentalExploreView rental={rental} key={index} />
          ))}
        </ScrollView>
      </View>
      {!canShowMap && <Spinner color={Colors.green} />}
    </SafeAreaView>
  );
};

export default Explore;
