import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Spacing from '../../../constants/Spacing'
import FontSize from '../../../constants/FontSize'
import Colors from '../../../constants/Colors'
import Font from '../../../constants/Font'
import Ionicons from 'react-native-ionicons'
const { height } = Dimensions.get("window")
import OTPInputView from "@twotalltotems/react-native-otp-input"

const OTPScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={{ padding: Spacing * 2 }}>
                <Pressable>
                <Ionicons name="arrow-back-outline" color={Colors.text}  size={Spacing*2}/>
                </Pressable>
                <View style={{ marginTop: 35,marginBottom:5}}>
                    <ImageBackground style={styles.ImageStyle} source={require('../../../assets/LoginImages/EnterOTP.png')} resizeMode="contain" />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text1}>Enter OTP ?</Text>
                    <Text style={styles.subtext2}>An 4-digit code has been sent to your number +92304*******</Text>
                </View>
                <View style={{marginLeft:50}}>
                <OTPInputView
                style={{width: '85%', height: 150}}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={{color:"#000"}}
                onCodeFilled={() => navigation.navigate("Login")}
               
               />
               <TouchableOpacity >
                    <Text style={{color:Colors.primary,fontWeight:"bold"}}>Resend OTP ?</Text>
                </TouchableOpacity>
                </View>
                
                
                <TouchableOpacity style={styles.submitButton}
                 onPress={() => navigation.navigate("Verify")}
                >
                    <Text style={styles.submitText}>Continue</Text>
                </TouchableOpacity>
               
              

               
            </View>
        </SafeAreaView>
    )
}

export default  OTPScreen 


const styles = StyleSheet.create({

   
    ImageStyle: {
        height: height / 3.5,

    },
    textView: {
        paddingHorizontal: Spacing * 3,
        paddingTop: Spacing ,

    },

    text1: {
        fontSize:45,
        color: Colors.primary,
        fontFamily: Font['poppins-bold'],
        fontWeight: "bold"
    },

    submitButton: {
        padding: Spacing *1.4,
        marginHorizontal:Spacing*3,
        backgroundColor: Colors.primary,
        marginVertical: Spacing *3,
        borderRadius: Spacing * 3,
        shadowColor: Colors.gray,
        shadowOffset: {
            width: 0,
            height: Spacing

        },
        shadowOpacity: 0.3,
        shadowRadius: Spacing
    },
    submitText: {
        fontFamily: Font["poppins-bold"],
        color: Colors.onPrimary,
        textAlign: "center",
        fontSize: FontSize.large,
        fontWeight:"bold"

    },
    subtext2:{
        fontFamily:Font['poppins-semiBold'],
        fontSize:FontSize.medium,
        color:Colors.text,
        marginVertical:8,
    
    },
   


})