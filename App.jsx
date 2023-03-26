

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import AppNaviagtor from './src/NormalStack/AppNavigator';
import Welcome from './src/screens/LoginScreens/Welcome';
import BookingDetails from './src/screens/BookingScreen/BookingDetails';
import ProfileScreen from './src/screens/ProfileScreens/ProfileScreen';
import ForgetScreen from './src/screens/LoginScreens/ForgetScreen';
import EditProfileScreen from './src/screens/ProfileScreens/EditProfile';
import Favourites from './src/screens/ProfileScreens/Favourites';
import TermsandCondition from './src/screens/ProfileScreens/TermsandCondition';
import HelpandSupport from './src/screens/ProfileScreens/HelpandSupport';
import HomeScreen from './src/screens/HomeScreens/HomeScreen';
import {NavigationContainer}  from "@react-navigation/native"
import Tabs from './src/bottom/TabNaviagtion';
import RegisterationScreen from './src/screens/LoginScreens/RegisterationScreen.';
import RegisterScreen from './src/screens/LoginScreens/OldRegisterScreen';
import MainServiceInfoScreen from './src/screens/ServiceStationInfo/MainServiceInfoScreen';
import VerificationScreen from './src/screens/LoginScreens/Verification';
import OTPScreen from './src/screens/LoginScreens/OTPScreen';
import LoginScreen from './src/screens/LoginScreens/LoginScreen';
import { Route } from './src/Routes/Route';
function App(){
  return ( 
    <Route/>
  );
  }

const styles = StyleSheet.create({
  
});

export default App;
