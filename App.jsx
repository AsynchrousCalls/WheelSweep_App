

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import AppNaviagtor from './src/NormalStack/AppNavigator';
import Welcome from './src/screens/LoginScreens/Welcome';
import LoginScreen from './src/screens/LoginScreens/LoginScreen';
import BookingDetails from './src/screens/BookingScreen/BookingDetails';
import ProfileScreen from './src/screens/ProfileScreens/ProfileScreen';
import ForgetScreen from './src/screens/LoginScreens/ForgetScreen';
function App(){
  return ( <AppNaviagtor/>
  );
  }

const styles = StyleSheet.create({
  
});

export default App;
