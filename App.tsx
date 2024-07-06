import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  faHeart,
  faMagnifyingGlass,
  faPaperPlane,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Explore from './screens/Explore/Explore';
import TabBarIcon from './components/TabBarIcon/TabBarIcon';
import Colors from './assets/Colors';
import {NativeBaseProvider} from 'native-base';
import Profile from './screens/Profile/Profile';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RentalDetails from './screens/RentalDetails/RentalDetails';
import Bookmarks from './screens/Bookmarks/Bookmarks';
import {MyContextProvider} from './MyContext';
import Post from './screens/PostRentalScreens/Post/Post';
import Messages from './screens/Messages/Messages';
import PostTab from './screens/PostRentalScreens/Post/PostTab';
import Prices from './screens/PostRentalScreens/Prices/Prices';
import Details from './screens/PostRentalScreens/Details/Details';
import {Amplify} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import useUserStore from './store/userStore';
import LogInOrSignUp from './screens/LogInOrSignUp/LogInOrSignUp';
import EnterPassword from './screens/EnterPassword/EnterPassword';
import FinishSigningUp from './screens/FinishSigningUp/FinishSigningUp';
import EnterVerificationCode from './screens/EnterVerificationCode/EnterVerificationCode';
import {Hub} from 'aws-amplify/utils';
import useUser from './hooks/useUser';
import FilterResults from './screens/FilterResults/FilterResults';
import ScreenNameConstants from './screens/ScreenNameConstants';
import {LogBox} from 'react-native';
import SearchView from './components/SearchView/SearchView';
import FullReview from './screens/FullReview/FullReview';

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]); // Ignore log notification by message

Amplify.configure(amplifyconfig);

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const PostRentalScreensStack = createNativeStackNavigator();
  const LogInOrSignUpStack = createNativeStackNavigator();
  const {authUser, userAttributes} = useUserStore();
  const [isUserFetched, setIsUserFetched] = useState<boolean>(false);
  const {initializeUser} = useUser();

  useEffect(() => {
    initializeUser()
      .then(() => {
        setIsUserFetched(true);
        setTimeout(function () {
          Hub.dispatch('user', {event: 'UserRetrieved', data: authUser});
        }, 0);
      })
      .catch(e => {
        console.error('App: load: user fetched error', e);
        setIsUserFetched(true);
        setTimeout(function () {
          Hub.dispatch('user', {event: 'UserRetrievedError', data: e});
        }, 0);
      });
  }, []);

  const PostRentalScreens = () => {
    return (
      <PostRentalScreensStack.Navigator>
        <PostRentalScreensStack.Group
          screenOptions={{
            headerTintColor: 'black',
            headerTitleStyle: {fontFamily: 'Poppins-SemiBold'},
          }}>
          <PostRentalScreensStack.Screen
            name={ScreenNameConstants.PostModal}
            component={Post}
            options={{
              headerTitle: 'Post',
            }}
          />
          <PostRentalScreensStack.Screen
            name={ScreenNameConstants.Prices}
            component={Prices}
            options={{headerBackTitleVisible: false, animation: 'fade'}}
          />
          <PostRentalScreensStack.Screen
            name={ScreenNameConstants.RentalDetails}
            component={Details}
            options={{headerBackTitleVisible: false, animation: 'fade'}}
          />
        </PostRentalScreensStack.Group>
      </PostRentalScreensStack.Navigator>
    );
  };
  const Tabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name={ScreenNameConstants.Explore}
          component={Explore}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarIcon isFocused={focused} icon={faMagnifyingGlass} />
            ),
            tabBarActiveTintColor: Colors.green,
            tabBarInactiveTintColor: Colors.gray500,
            tabBarLabelStyle: {
              fontFamily: 'Poppins-SemiBold',
              fontSize: 12,
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={ScreenNameConstants.Bookmarks}
          component={Bookmarks}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarIcon isFocused={focused} icon={faHeart} />
            ),
            tabBarActiveTintColor: Colors.green,
            tabBarInactiveTintColor: Colors.gray500,
            tabBarLabelStyle: {
              fontFamily: 'Poppins-SemiBold',
              fontSize: 12,
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={ScreenNameConstants.Post}
          component={PostTab}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarIcon isFocused={focused} icon={faPlus} />
            ),
            tabBarActiveTintColor: Colors.green,
            tabBarInactiveTintColor: Colors.gray500,
            tabBarLabelStyle: {
              fontFamily: 'Poppins-SemiBold',
              fontSize: 12,
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={ScreenNameConstants.Messages}
          component={Messages}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarIcon isFocused={focused} icon={faPaperPlane} />
            ),
            tabBarActiveTintColor: Colors.green,
            tabBarInactiveTintColor: Colors.gray500,
            tabBarLabelStyle: {
              fontFamily: 'Poppins-SemiBold',
              fontSize: 12,
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={
            authUser ? ScreenNameConstants.Profile : ScreenNameConstants.Login
          }
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarIcon isFocused={focused} icon={faUser} />
            ),
            tabBarActiveTintColor: Colors.green,
            tabBarInactiveTintColor: Colors.gray500,
            tabBarLabelStyle: {
              fontFamily: 'Poppins-SemiBold',
              fontSize: 12,
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  };

  const LogInOrSignUpScreens = () => {
    return (
      <LogInOrSignUpStack.Navigator>
        <LogInOrSignUpStack.Group
          screenOptions={{
            headerTitleStyle: {
              fontFamily: 'Poppins-Regular',
            },
            headerBackTitleVisible: false,
            headerTintColor: 'black',
          }}>
          <LogInOrSignUpStack.Screen
            name={ScreenNameConstants.LogInOrSignUp}
            component={LogInOrSignUp}
          />
          <LogInOrSignUpStack.Screen
            name={ScreenNameConstants.EnterPassword}
            component={EnterPassword}
          />
          <LogInOrSignUpStack.Screen
            name={ScreenNameConstants.FinishSigningUp}
            component={FinishSigningUp}
          />
          <LogInOrSignUpStack.Screen
            name={ScreenNameConstants.EnterVerificationCode}
            component={EnterVerificationCode}
          />
        </LogInOrSignUpStack.Group>
      </LogInOrSignUpStack.Navigator>
    );
  };

  return (
    <MyContextProvider>
      <ActionSheetProvider>
        <NativeBaseProvider>
          {isUserFetched && (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name={ScreenNameConstants.Tabs}
                  component={Tabs}
                  options={{
                    headerShown: false,
                    presentation: 'fullScreenModal',
                  }}
                />
                <Stack.Screen
                  name={ScreenNameConstants.LogInOrSignUpScreens}
                  component={LogInOrSignUpScreens}
                  options={{
                    presentation: 'modal',
                    headerShown: false,
                  }}
                />
                <Stack.Group
                  screenOptions={{
                    presentation: 'modal',
                    headerTitleStyle: {
                      fontFamily: 'Poppins-Regular',
                    },
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                  }}>
                  <Stack.Screen
                    name={ScreenNameConstants.Search}
                    component={SearchView}
                  />
                  <Stack.Screen
                    name={ScreenNameConstants.FilterResults}
                    component={FilterResults}
                  />
                  <Stack.Screen
                    name={ScreenNameConstants.FullReview}
                    component={FullReview}
                  />
                </Stack.Group>
                <Stack.Screen
                  name={ScreenNameConstants.PostRentalScreens}
                  component={PostRentalScreens}
                  options={{
                    headerShown: false,
                    gestureEnabled: false,
                    presentation: 'containedModal',
                  }}
                />
                <Stack.Screen
                  name={ScreenNameConstants.RentalDetails}
                  component={RentalDetails}
                  options={{
                    headerTitleStyle: {
                      fontFamily: 'Poppins-Regular',
                    },
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          )}
        </NativeBaseProvider>
      </ActionSheetProvider>
    </MyContextProvider>
  );
}

export default App;
