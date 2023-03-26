import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const Stack = createNativeStackNavigator();


function AppNaviagtor() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={RegisterationScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
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
        <Stack.Screen name='ServiceStationInfo' component={MainServiceInfoScreen} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default AppNaviagtor

