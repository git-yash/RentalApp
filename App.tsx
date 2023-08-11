import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  faHeart,
  faMagnifyingGlass,
  faMessage,
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

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  const ExploreStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={'Explore'}
          component={Explore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Details'}
          component={RentalDetails}
          options={{
            headerTitleStyle: {
              fontFamily: 'Poppins-Regular',
            },
            headerTintColor: 'black',
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <ActionSheetProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar barStyle={'dark-content'} />
          <Tab.Navigator>
            <Tab.Screen
              name={'Explore'}
              component={ExploreStack}
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
              component={ExploreStack}
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
              component={ExploreStack}
              options={{
                tabBarIcon: ({focused}) => (
                  <TabBarIcon isFocused={focused} icon={faMessage} />
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
        </NavigationContainer>
      </NativeBaseProvider>
    </ActionSheetProvider>
  );
}

export default App;
