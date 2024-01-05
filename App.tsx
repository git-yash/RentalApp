import React from 'react';
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
import {StatusBar} from 'react-native';
import Profile from './screens/Profile/Profile';
import auth from '@react-native-firebase/auth';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RentalDetails from './screens/RentalDetails/RentalDetails';
import Bookmarks from './screens/Bookmarks/Bookmarks';
import {MyContextProvider} from './MyContext';
import Post from './screens/Post/Post';
import Messages from './screens/Messages/Messages';
import PostTab from './screens/Post/PostTab';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
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
          name={auth().currentUser ? 'Profile' : 'Log in'}
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

  return (
    <MyContextProvider>
      <ActionSheetProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <StatusBar barStyle={'dark-content'} />
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
                name={'PostModal'}
                component={Post}
                options={{
                  headerTitleStyle: {
                    fontFamily: 'Poppins-SemiBold',
                  },
                  presentation: 'containedModal',
                  headerTitle: 'Post',
                  gestureEnabled: false,
                  headerTintColor: 'black',
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
        </NativeBaseProvider>
      </ActionSheetProvider>
    </MyContextProvider>
  );
}

export default App;
