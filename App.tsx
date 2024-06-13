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
import {fetchUserAttributes, getCurrentUser} from 'aws-amplify/auth';
import {generateClient} from 'aws-amplify/api';
import {getUser} from './src/graphql/queries';
import {type User} from './src/API';

Amplify.configure(amplifyconfig);

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const PostRentalScreensStack = createNativeStackNavigator();
  const {authUser, setAuthUser, setUserAttributes, setUser} = useUserStore();
  const client = generateClient();

  useEffect(() => {
    async function initializeUser() {
      await getCurrentUser()
        .then(async au => {
          // console.log(au, 'App:getUser');
          setAuthUser(au);

          const user = await client
            .graphql({
              query: getUser,
              variables: {id: au.signInDetails?.loginId},
            })
            .then(response => {
              const u = response.data.getUser;
              // console.log(u, 'App:User');
              return u === null ? undefined : (u as User);
            })
            .catch(e => {
              console.error(e);
              return undefined;
            });

          setUser(user);

          await fetchUserAttributes()
            .then(attributes => {
              // console.log(attributes, 'App:attributes');
              setUserAttributes(attributes);
            })
            .catch(e => console.error(e));
        })
        .catch(e => {
          console.error(e);
        });
    }

    console.log('App load');
    initializeUser();
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
