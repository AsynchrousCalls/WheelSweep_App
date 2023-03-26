import * as React from 'react';
import { View, useWindowDimensions,Text,Image,StyleSheet,Button,TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Ionicons from 'react-native-ionicons'
import FirstRoute from './Services'
import ThirdRoute from './Reviews'
import COLORS from '../../../constants/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SecondRoute = () => (
  <View>
  <View style={{  margin:5,}} >
  <Text style={{ fontSize:20, fontWeight:"900",color:"black"}}>About</Text>
  <Text style={{ fontSize:13, color:"black"}}>This section is provided for the about information of service station.This section is provided for the about information of service station.This section is provided for the about information of service station.</Text>
  </View>
  <View style={{  margin:5,}} >
  <Text style={{ fontSize:15, fontWeight:'bold',color:"black"}}>Photos</Text>
  <Image  source={require("../../../assets/images/carousel1.jpg")}
       style={{width: 80, height: 80,borderRadius:10,margin:5}} />
  </View>
  <View style={{  margin:5,}} >
  <Text style={{ fontSize:20, fontWeight:"900",color:"black"}}>Location</Text>
  <Text style={{ fontSize:13, color:"black"}}>Samnabad Main Street# F-15 Near Baosris Lahore</Text>
  </View>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function MainServiceInfoScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Services' },
    { key: 'second', title: 'Information' },
    { key: 'third', title: 'Reviews' },
  ]);

  return (
   <>
   
   <Image  source={require("../../../assets/images/carousel1.jpg")}
       style={{width: '90%', height: 200,borderRadius:20,
       marginTop:50,marginHorizontal:15}} />
       <View style={styles.info}>
       <Text style={styles.name}>WheelSweep Wash</Text>
       {/*<View style={styles.icons}>
       <Ionicons name="md-call" size={32} color="green" />
       <Ionicons name="logo-whatsapp" size={32} color="green" />
       </View>*/}
       <View style={styles.icons}>
       <Icon name="star" size={20} color={COLORS.blue} />
       <Icon name="star" size={20} color={COLORS.blue} />
       <Icon name="star" size={20} color={COLORS.blue} />
       <Icon name="star-outline" size={20} color={COLORS.blue} />
       <Icon name="star-outline" size={20} color={COLORS.blue} />
      
       </View>

       <View style={styles.icons}>
       {/* <Icon name="star-outline" size={20} color={COLORS.blue} /> */}
       <Text>COMSATS University,Lahore</Text>
       </View>
       </View>
       
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      
    />
    <View style={styles.btn} >
    <Button title='Book Appointment' color={COLORS.blue} />
    </View>
    </>
    
  );
}
const styles = StyleSheet.create({
  container: {
    
  },
  info:{
    backgroundColor:COLORS.white,
    marginHorizontal:2,
    padding:10
  },
  name:{
    fontSize:22,
    fontWeight:"bold",
    color:COLORS.black,
    marginLeft:12

  },
  icons:{
    flexDirection:'row',
    marginHorizontal:10,
    
  },
  btn:{
    position:"absolute",
    bottom:0,
    width:'100%',
    
    
  }
});



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const MainServiceInfoScreen = () => {
//   return (
//     <View>
//       <Text>MainServiceInfoScreen</Text>
//     </View>
//   )
// }

// export default MainServiceInfoScreen

// const styles = StyleSheet.create({})