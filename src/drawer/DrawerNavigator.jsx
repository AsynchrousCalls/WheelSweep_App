import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from './Main';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import BookingDetails from '../screens/BookingScreen/BookingDetails';
const Drawer=createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} options={{headerShown:false}}/>
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="BookingDetails" component={BookingDetails} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}