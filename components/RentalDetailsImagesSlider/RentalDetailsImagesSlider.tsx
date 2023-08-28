import React, {useState} from 'react';
import {Dimensions, Image, Modal, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Colors from '../../assets/Colors';
import ImageViewer from 'react-native-image-zoom-viewer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons';

const RentalDetailsImagesSlider = (props: {picturePaths: string[]}) => {
  const windowWidth: number = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isZoomViewerEnabled, setIsZoomViewerEnabled] = useState(false);
  const [canPressImage, setCanPressImage] = useState(true);
  const images = [
    {
      url: props.picturePaths[0],
      props: {},
    },
    {
      url: props.picturePaths[1],
      props: {},
    },
  ];

  return (
    <View>
      <Modal visible={isZoomViewerEnabled} transparent={isZoomViewerEnabled}>
        <ImageViewer
          imageUrls={images}
          index={currentIndex}
          onClick={() => setIsZoomViewerEnabled(false)}
        />
      </Modal>
      {props.picturePaths.length === 1 && (
        <TouchableOpacity disabled={canPressImage}>
          <Image
            source={{uri: props.picturePaths[0]}}
            width={windowWidth}
            height={200}
          />
        </TouchableOpacity>
      )}
      {props.picturePaths.length > 1 && (
        <View>
          <Carousel
            data={props.picturePaths}
            width={windowWidth}
            height={Dimensions.get('window').height * 0.3}
            defaultIndex={currentIndex}
            scrollAnimationDuration={300}
            onScrollBegin={() => setCanPressImage(false)}
            onSnapToItem={index => {
              setCurrentIndex(index);
              setCanPressImage(true);
            }}
            renderItem={({index}) => (
              <View>
                <Image
                  source={{uri: props.picturePaths[index]}}
                  width={windowWidth}
                  height={200}
                />
              </View>
            )}
          />
          <View
            style={{
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => setIsZoomViewerEnabled(true)}
              style={{
                padding: 15,
                position: 'absolute',
                bottom: 5,
                right: 5,
                alignSelf: 'flex-end',
                borderRadius: 100,
                backgroundColor: 'black',
                opacity: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesomeIcon
                icon={faMagnifyingGlassPlus}
                color={'white'}
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', padding: 10, height: 50}}>
            {props.picturePaths.map((item, index) => {
              return (
                <View style={{paddingRight: 5}} key={index}>
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
