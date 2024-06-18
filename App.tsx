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
import LogInOrSignUp from './ModalScreens/LogInOrSignUp/LogInOrSignUp';
import EnterPassword from './ModalScreens/EnterPassword/EnterPassword';
import FinishSigningUp from './ModalScreens/FinishSigningUp/FinishSigningUp';
import EnterVerificationCode from './ModalScreens/EnterVerificationCode/EnterVerificationCode';
import {Hub} from 'aws-amplify/utils';
import useUser from './hooks/useUser';
import FilterResults from './ModalScreens/FilterResults/FilterResults';

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
      .then(isInitialized => {
        console.log('useExplore: load: isInitialized', isInitialized);
        setIsUserFetched(true);
        Hub.dispatch('user', {event: 'UserRetrieved', data: authUser});
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
            name={'PostModal'}
            component={Post}
            options={{
              headerTitle: 'Post',
            }}
          />
          <PostRentalScreensStack.Screen
            name={'Prices'}
            component={Prices}
            options={{headerBackTitleVisible: false, animation: 'fade'}}
          />
          <PostRentalScreensStack.Screen
            name={'Details'}
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
          name={'Explore'}
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
          name={'Bookmarks'}
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
          name={'Post'}
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
          name={'Messages'}
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
          name={authUser ? 'Profile' : 'Log in'}
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
            name={'Log In Or Sign Up'}
            component={LogInOrSignUp}
          />
          <LogInOrSignUpStack.Screen
            name={'Enter Password'}
            component={EnterPassword}
          />
          <LogInOrSignUpStack.Screen
            name={'Finish Signing Up'}
            component={FinishSigningUp}
          />
          <LogInOrSignUpStack.Screen
            name={'Enter Verification Code'}
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
                  name={'Tabs'}
                  component={Tabs}
                  options={{
                    headerShown: false,
                    presentation: 'fullScreenModal',
                  }}
                />
                <Stack.Screen
                  name={'LogInOrSignUpScreens'}
                  component={LogInOrSignUpScreens}
                  options={{
                    presentation: 'modal',
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name={'Filter Results'}
                  component={FilterResults}
                  options={{presentation: 'modal'}}
                />
                <Stack.Screen
                  name={'PostRentalScreens'}
                  component={PostRentalScreens}
                  options={{
                    headerShown: false,
                    gestureEnabled: false,
                    presentation: 'containedModal',
                  }}
                />
                <Stack.Screen
                  name={'Details'}
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
