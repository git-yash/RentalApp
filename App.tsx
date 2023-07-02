import React from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import Explore from './screens/Explore/Explore';
import LogInOrSignUp from './screens/LogInOrSignUp/LogInOrSignUp';
import Colors from './Colors';
import TabBarIcon from './components/TabBarIcon/TabBarIcon';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
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
        <Tab.Screen name={'LogIn'} component={LogInOrSignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
