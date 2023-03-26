
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import BookingDetails from '../screens/BookingScreen/BookingDetails';

const Bottom=createBottomTabNavigator();

const BottomNavigator = () => {
  return (
   <Bottom.Navigator>
    <Bottom.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }}/>
    <Bottom.Screen name='BookingDetails' component={BookingDetails} options={{ headerShown: false }}/>

   </Bottom.Navigator>
   
  )
}

export default BottomNavigator