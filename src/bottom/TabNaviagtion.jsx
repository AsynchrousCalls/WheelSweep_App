import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import BookingDetails from '../screens/BookingScreen/BookingDetails';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import TermsandCondition from '../screens/ProfileScreens/TermsandCondition';
import { View, Text ,Image} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
const Tab=createBottomTabNavigator();

const Tabs=()=>{
    return(
        <Tab.Navigator 
        initialRouteName={HomeScreen}
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                if(route.name===HomeScreen){
                    iconName=focused?'home':'home-outline'
                }else if(route.name===ProfileScreen){
                    iconName=focused?'settings':'settings-outline'
                }else if(route.name===BookingDetails){
                    iconName=focused?'list':'list-outline'

                }
                return <Ionicons name={iconName} size={size} color={color}/>

            }
        }) }
    >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="BookingDetails" component={BookingDetails} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />

        </Tab.Navigator>
    )

}

export default Tabs