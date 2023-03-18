import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import BookingDetails from '../screens/BookingScreen/BookingDetails';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import BookingHistory from '../screens/BookingScreen/BookingHistory';

const Bottom=createBottomTabNavigator();

const BottomNavigator = () => {
  return (
   <Bottom.Navigator>
    <Bottom.Screen name='ProfileScreen' component={ProfileScreen}/>
    <Bottom.Screen name='BookingDetails' component={BookingDetails}/>
    <Bottom.Screen name='BookingHistory' component={BookingHistory}/>

   </Bottom.Navigator>
   
  )
}

export default BottomNavigator