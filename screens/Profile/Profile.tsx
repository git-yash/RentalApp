import React, {useCallback} from 'react';
import {Button, SafeAreaView, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';
import {useFocusEffect} from '@react-navigation/native';
import TabBarIcon from '../../components/TabBarIcon/TabBarIcon';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser as solidUser} from '@fortawesome/free-solid-svg-icons';
import {faUser as regularUser} from '@fortawesome/free-regular-svg-icons';
import ProfileImageNameView from '../../components/ProfileImage/ProfileImageNameView';
import useProfile from './useProfile';
import ProfileService from './Profile.service';

const Profile = (props: {navigation: any}) => {
  const {
    isModalVisible,
    imageURI,
    handleEditProfileImageActionSheetButton,
    setModalVisible,
  } = useProfile();
  library.add(solidUser, regularUser);
  const profileService = new ProfileService();

  // have to leave this useFocusEffect in tsx file due to it changing the tab bar property
  useFocusEffect(
    useCallback(() => {
      const isLoggedIn = auth().currentUser;

      props.navigation.setOptions({
        tabBarLabel: isLoggedIn ? 'Profile' : 'Log in',
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            isFocused={focused}
            icon={isLoggedIn ? solidUser : regularUser}
          />
        ),
      });
    }, [props.navigation, isModalVisible]), // Changes icon of tab bar item when user is logged in or not
  );

  return (
    <SafeAreaView>
      {auth().currentUser && (
        <ScrollView>
          <ProfileImageNameView uri={imageURI} />
          <Button
            title="Edit"
            onPress={() => {
              handleEditProfileImageActionSheetButton();
            }}
          />
          <Button
            title="Sign out"
            onPress={() => {
              profileService.handleSignOut(setModalVisible);
            }}
          />
        </ScrollView>
      )}
      {!auth().currentUser && (
        <Button
          title={'Log in or Sign up'}
          onPress={() => setModalVisible(true)}
        />
      )}
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
      {/*<View>*/}
      {/*  <GooglePlacesAutocomplete*/}
      {/*    placeholder="Type a place"*/}
      {/*    query={{*/}
      {/*      key: 'AIzaSyDWj-6xCvsq1FbtKfV6hfMCw4rlarXuT-E',*/}
      {/*    }}*/}
      {/*    onPress={(data, details = null) => console.log(data, details)}*/}
      {/*  />*/}
      {/*</View>*/}
    </SafeAreaView>
  );
};

export default Profile;
