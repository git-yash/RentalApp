import React, {useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MiniRentalExploreView from '../MiniRentalExploreView/MiniRentalExploreView';
import Colors from '../../assets/Colors';

const RentalDetailsImagesSlider = (props: {picturePaths: string[]}) => {
  const windowWidth: number = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <View>
      {props.picturePaths.length === 1 && (
        <TouchableOpacity>
          <Image
            source={{uri: props.picturePaths[0]}}
            width={windowWidth}
            height={150}
          />
        </TouchableOpacity>
      )}
      {props.picturePaths.length > 1 && (
        <View>
          <Carousel
            data={props.picturePaths}
            width={windowWidth}
            height={200}
            mode={'parallax'}
            defaultIndex={currentIndex}
            scrollAnimationDuration={500}
            onSnapToItem={index => setCurrentIndex(index)}
            renderItem={({index}) => (
              <View style={{shadowRadius: 10, shadowColor: 'black'}}>
                <TouchableOpacity>
                  <Image
                    source={{uri: props.picturePaths[index]}}
                    width={windowWidth}
                    style={{borderRadius: 15}}
                    height={200}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={{flexDirection: 'row', padding: 10}}>
            {props.picturePaths.map((item, index) => {
              return (
                <View style={{paddingRight: 5}}>
                  <TouchableOpacity onPress={() => setCurrentIndex(index)}>
                    <Image
                      source={{uri: item}}
                      width={50}
                      height={50}
                      style={{
                        borderRadius: 10,
                        borderWidth: index === currentIndex ? 3 : 0,
                        borderColor: Colors.green,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
};

export default RentalDetailsImagesSlider;
