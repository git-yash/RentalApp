import React from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {faUser, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Explore from './screens/Explore/Explore';
import TabBarIcon from './components/TabBarIcon/TabBarIcon';
import Colors from './assets/Colors';
import {NativeBaseProvider} from 'native-base';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
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
            name={'Log in'}
            component={Explore}
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
