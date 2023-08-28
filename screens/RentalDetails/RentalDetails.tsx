import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Util from '../../Util';
import rentalDetailsStyle from './RentalDetails.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';
import MapView, {MapMarker, PROVIDER_GOOGLE} from 'react-native-maps';
import UserPositionCustomMapMarker from '../../components/UserPositionCustomMapMarker/UserPositionCustomMapMarker';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import useRentalDetails from './useRentalDetails';
import Carousel from 'react-native-reanimated-carousel';
import RentalDetailsImagesSlider from '../../components/RentalDetailsImagesSlider/RentalDetailsImagesSlider';

const RentalDetails = (props: {navigation: any; route: any}) => {
  const {rental, currentLatitude, currentLongitude} = props.route.params;
  const noReviews: string = 'No reviews';
  const readMoreMaxCharLength: number = 113;
  const shouldShowReadMore: boolean =
    rental.description >= readMoreMaxCharLength;
  const mapStyle = require('../../assets/MapStyle.json');
  const {handleMapViewPressablePress} = useRentalDetails(
    props.navigation,
    rental,
  );
  // max is 33

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView>
          <RentalDetailsImagesSlider picturePaths={rental.picturePaths} />
          <View style={rentalDetailsStyle.mainContainer}>
            <Text style={rentalDetailsStyle.cityText}>
              {Util.getCityAndState(rental.address)}
            </Text>
            <Text style={rentalDetailsStyle.titleText}>{rental.title}</Text>
            <View style={rentalDetailsStyle.reviewContainer}>
              <FontAwesomeIcon
                icon={faStar}
                color={Colors.green}
                style={rentalDetailsStyle.starIcon}
              />
              <Text style={rentalDetailsStyle.ratingText}>
                {rental.reviews.length === 0 ? noReviews : rental.rating}
              </Text>
              <Text style={rentalDetailsStyle.reviewLengthText}>
                ({rental.reviews.length})
              </Text>
            </View>
            <Text style={rentalDetailsStyle.subtitleText}>Description</Text>
            <Text style={rentalDetailsStyle.subtitleDescriptionText}>
              {rental.description}
            </Text>
            {shouldShowReadMore && (
              <TouchableOpacity>
                <Text style={rentalDetailsStyle.readMoreText}>Read more</Text>
              </TouchableOpacity>
            )}
            <Text style={rentalDetailsStyle.subtitleText}>Inclusions</Text>
            <Text style={rentalDetailsStyle.subtitleDescriptionText}>
              {rental.description}
            </Text>
            {shouldShowReadMore && (
              <TouchableOpacity>
                <Text style={rentalDetailsStyle.readMoreText}>Read more</Text>
              </TouchableOpacity>
            )}
            <Text style={rentalDetailsStyle.deliveryText}>Delivery</Text>

            <Pressable
              onPress={() => handleMapViewPressablePress()}
              style={rentalDetailsStyle.mapPressable}>
              <MapView
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: currentLatitude,
                  longitude: currentLongitude,
                  latitudeDelta: 0.15,
                  longitudeDelta: 0.15,
                }}
                style={rentalDetailsStyle.mapView}>
                <MapMarker
                  coordinate={{
                    latitude: currentLatitude,
                    longitude: currentLongitude,
                  }}>
                  <UserPositionCustomMapMarker />
                </MapMarker>
              </MapView>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default RentalDetails;
