import React from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import Explore from './screens/Explore/Explore';
import TabBarIcon from './components/TabBarIcon/TabBarIcon';
import Colors from './assets/Colors';
import { NativeBaseProvider } from "native-base";

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
                <TabBarIcon isFocused={useIsFocused()} icon={faMagnifyingGlass} />
              ),
              tabBarActiveTintColor: Colors.green,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
