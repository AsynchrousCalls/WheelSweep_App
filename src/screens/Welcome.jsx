import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Children } from 'react'
import Font from '../../constants/Font'
import Colors from '../../constants/Colors'
import FontSize from '../../constants/FontSize'
import Spacing from '../../constants/Spacing'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {height}=Dimensions.get("window")
const Welcome = ({}) => {
  return (
    <SafeAreaView>
     <View style={{marginTop:60}}>
        <ImageBackground style={styles.ImageStyle} source={require('../../assets/images/blue_wheel.jpg' )} resizeMode="contain"/>
        <View style={styles.textView}>
        <Text style={styles.text1}>Discover Nearby Car Service Stations here</Text>
        <Text style={styles.subtext2}>Explore all service stations nearby you by your current location</Text>
        </View> 
    </View>
    <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.loginbuttonStyle}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.registerbuttonStyle}>
            <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>        
    </View>
    </SafeAreaView>
    
   
  )
}

export default Welcome

const styles = StyleSheet.create({
   

    ImageStyle:{
        height:height/2.5,
    },
    textView:{
        paddingHorizontal:Spacing*4,
        paddingTop:Spacing*4,

    },

    text1:{
        fontFamily:Font['poppins-bold'],
        fontSize:FontSize.xLarge,
        color:Colors.primary,
        textAlign:"center",
        fontWeight:"bold"
    },
    subtext2:{
        fontFamily:Font['poppins-bold'],
        fontSize:FontSize.medium,
        color:Colors.text,
        textAlign:"center",
        marginTop:Spacing*2
    },
    buttonsView:{
        paddingHorizontal:Spacing*2,
        paddingTop:Spacing*8,
        flexDirection:"row",
        justifyContent:'space-between'
    },
    loginbuttonStyle:{
        paddingVertical:Spacing*1.5,
        backgroundColor:Colors.primary,
        paddingHorizontal:Spacing*2,
        width:"48%",
        borderRadius:Spacing,
        shadowColor:Colors.primary,
        shadowOffset:{
            width:0,
            height:Spacing

        },
        shadowOpacity:0.3,
        shadowRadius:Spacing
    },
    loginText:{ 
        fontFamily:Font["poppins-bold"],
        fontWeight:"bold",
        color:Colors.onPrimary,
        fontSize:FontSize.large,
        textAlign:"center",

    },
    registerbuttonStyle:{
        paddingVertical:Spacing*1.5,
        paddingHorizontal:Spacing*3,
        backgroundColor:Colors.lightPrimary,
        width:"48%",
        borderRadius:Spacing,
        
       
    },
    registerText:{
        fontWeight:"bold",
        fontFamily:Font["poppins-bold"],
        color:Colors.text,
        fontSize:FontSize.large,
        textAlign:"center"
    }


})