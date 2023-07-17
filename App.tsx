import React from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons';
import Explore from './screens/Explore/Explore';
import TabBarIcon from './components/TabBarIcon/TabBarIcon';
import Colors from './assets/Colors';
import {NativeBaseProvider} from 'native-base';
import {StatusBar} from 'react-native';
import Profile from './screens/Profile/Profile';
import auth from '@react-native-firebase/auth';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        <Tab.Navigator>
          <Tab.Screen
            name={'Explore'}
            component={Explore}
            options={{
              tabBarIcon: () => (
                <TabBarIcon
                  isFocused={useIsFocused()}
                  icon={faMagnifyingGlass}
                />
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
              tabBarIcon: () => (
                <TabBarIcon isFocused={useIsFocused()} icon={faUser} />
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
  );
}

export default App;
