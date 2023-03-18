import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/LoginScreens/Welcome';
import LoginScreen from '../screens/LoginScreens/LoginScreen';
import RegisterScreen from '../screens/LoginScreens/RegisterScreen';
import BookingDetails from '../screens/BookingScreen/BookingDetails';
import BookingHistory from '../screens/BookingScreen/BookingHistory';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import Main from '../drawer/Main';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import ForgetScreen from '../screens/LoginScreens/ForgetScreen';
import ResetScreen from '../screens/LoginScreens/Reset';
import OTPScreen from '../screens/LoginScreens/OTPScreen';
import VerificationScreen from '../screens/LoginScreens/Verification';



const Stack = createNativeStackNavigator();


function AppNaviagtor() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name='OTPScreen' component={OTPScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Forgot' component={ForgetScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Reset' component={ResetScreen} options={{ headerShown: false }} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='BookingDetails' component={BookingDetails} options={{ headerShown: false }} />
        <Stack.Screen name='BookingHistory' component={BookingHistory} options={{ headerShown: false }} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Verify' component={VerificationScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default AppNaviagtor

