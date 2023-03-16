

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Font from './constants/Font';
import FontSize from './constants/FontSize';
import Welcome from './src/screens/Welcome';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from "./src/screens/RegisterScreen"
import ForgetScreen from './src/screens/ForgetScreen';
import OTPScreen from './src/screens/OTPScreen';
import ResetScreen from './src/screens/Reset';
function App(){
  return (
   <SafeAreaView>
    <ResetScreen/>
   </SafeAreaView>
  );
  }

const styles = StyleSheet.create({
   container:{flex:1},
});

export default App;
