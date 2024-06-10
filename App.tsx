import React, {useEffect} from 'react';
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
import Post from './screens/PostRentalScreens/Post/Post';
import Messages from './screens/Messages/Messages';
import PostTab from './screens/PostRentalScreens/Post/PostTab';
import Prices from './screens/PostRentalScreens/Prices/Prices';
import Details from './screens/PostRentalScreens/Details/Details';
import {generateClient} from 'aws-amplify/api';
import {createUser} from './src/graphql/mutations';
import {Amplify} from 'aws-amplify';

Amplify.configure({
  API: {
    GraphQL: {
      endpoint:
        'https://ha2vynb4ancnjpcnsfp5ehlxia.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-7j4se2tyebdzjjd4b5d7er3mva',
    },
  },
});

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const PostRentalScreensStack = createNativeStackNavigator();

  useEffect(() => {
    const client = generateClient();
    console.log('in');
    client.graphql({
      query: createUser,
      variables: {
        input: {
          firstName: 'yash',
          lastName: 'shah',
          email: 'yashmittalshah@gmail.com',
        },
      },
    });
  });

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
        </NativeBaseProvider>
      </ActionSheetProvider>
    </MyContextProvider>
  );
}

export default App;
