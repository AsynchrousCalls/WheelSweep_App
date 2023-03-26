import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../screens/LoginScreens/Welcome';
import BookingDetails from '../screens/BookingScreen/BookingDetails';
import BookingHistory from '../screens/BookingScreen/BookingHistory';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import ForgotScreen from '../screens/LoginScreens/ForgetScreen';
import ResetScreen from '../screens/LoginScreens/Reset';
import OTPScreen from '../screens/LoginScreens/OTPScreen';
import VerificationScreen from '../screens/LoginScreens/Verification';
import TermsandCondition from '../screens/ProfileScreens/TermsandCondition';
import Favourites from '../screens/ProfileScreens/Favourites';
import EditProfile from '../screens/ProfileScreens/EditProfile';
import HelpandSupport from '../screens/ProfileScreens/HelpandSupport';
import RegisterationScreen from '../screens/LoginScreens/RegisterationScreen.';
import LoginScreen from '../screens/LoginScreens/LoginScreen';
import MainServiceInfoScreen from '../screens/ServiceStationInfo/MainServiceInfoScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/color';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// export default function Routes() {

// <Stack.Navigator>
//   <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
//   <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
//   <Stack.Screen name='Register' component={RegisterationScreen} options={{ headerShown: false }} />
//   <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
//   <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
//   <Stack.Screen name='OTP' component={OTPScreen} options={{ headerShown: false }} />
//   <Stack.Screen name='Forgot' component={ForgotScreen} options={{ headerShown: false }} />
//   <Stack.Screen name='Reset' component={ResetScreen} options={{ headerShown: false }} />
//   <Stack.Screen name='BookingDetails' component={BookingDetails} options={{ headerShown: false }} />
//   <Stack.Screen name='BookingHistory' component={BookingHistory} options={{ headerShown: false }} />
//   <Stack.Screen name='Verify' component={VerificationScreen} options={{ headerShown: false }} />
//   <Stack.Screen name='Terms' component={TermsandCondition} options={{ headerShown: false }} />
//   <Stack.Screen name='Favorites' component={Favourites} options={{ headerShown: false }} />
//   <Stack.Screen name='Help' component={HelpandSupport} options={{ headerShown: false }} />
//   <Stack.Screen name='Edit' component={EditProfile} options={{ headerShown: false }} />
//   <Stack.Screen name='ServiceStationInfo' component={MainServiceInfoScreen} options={{ headerShown: false }} />
// </Stack.Navigator>


//   return (
//     <NavigationContainer >
//       <Tab.Navigator initialRouteName="Welcome"
//        screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: true,
//         tabBarActiveTintColor: "red", 
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: {
//           backgroundColor: "lightgreen", 
//           position:"absolute", 
//           borderRadius: 0,
//           bottom: 0,
//           marginHorizontal: 0
//         }
//       }}>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarBadge: 5,
//             tabBarIcon: ({focused}) => <Icon name="home" size={28} color={focused ? "red" : "gray"} />
//           }}
//         />
//         <Tab.Screen
//           name="ServiceStations"
//           component={MainServiceInfoScreen}
//           options={{
//             tabBarIcon: ({focused}) => <Icon name="search" size={28} color={focused ? "red" : "gray"}  />
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={ProfileScreen}
//           options={{
//             tabBarIcon: ({focused}) => <Icon name="settings" size={28} color={focused ? "red" : "gray"}  />
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: COLORS.white,
          position: "absolute",
          borderRadius: 0,
          bottom: 0,
          marginHorizontal: 0,
          
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          // tabBarBadge: 5,
          tabBarIcon: ({ focused }) => <Icon name="home" size={28} color={focused ? COLORS.blue : COLORS.grey } />
        }}
      />
      <Tab.Screen name="Services" component={MainServiceInfoScreen}
        options={{
          tabBarIcon: ({ focused }) => <Icon name="heart" size={28} color={focused ? COLORS.blue : COLORS.grey} />
        }}
      />
      <Tab.Screen name="Activities" component={BookingDetails}
        options={{
          tabBarIcon: ({ focused }) => <Icon name="search" size={28} color={focused ? COLORS.blue: COLORS.grey} />
        }}
      />
      <Tab.Screen name="Account" component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <Icon name="settings" size={28} color={focused ? COLORS.blue : COLORS.grey} />
        }}
      />
    </Tab.Navigator>
  );
}

export function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={RegisterationScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name='OTP' component={OTPScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Forgot' component={ForgotScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Reset' component={ResetScreen} options={{ headerShown: false }} />
        <Stack.Screen name='BookingDetails' component={BookingDetails} options={{ headerShown: false }} />
        <Stack.Screen name='BookingHistory' component={BookingHistory} options={{ headerShown: false }} />
        <Stack.Screen name='Verify' component={VerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Terms' component={TermsandCondition} options={{ headerShown: false }} />
        <Stack.Screen name='Favorites' component={Favourites} options={{ headerShown: false }} />
        <Stack.Screen name='Help' component={HelpandSupport} options={{ headerShown: false }} />
        <Stack.Screen name='Edit' component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name='StationInfo' component={MainServiceInfoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}