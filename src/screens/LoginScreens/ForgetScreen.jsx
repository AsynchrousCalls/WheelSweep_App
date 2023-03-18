import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Spacing from '../../../constants/Spacing'
import FontSize from '../../../constants/FontSize'
import Colors from '../../../constants/Colors'
import Font from '../../../constants/Font'
import AppTextInput from '../../components/AppTextInput'
import Ionicons from 'react-native-ionicons'
const { height } = Dimensions.get("window")

const ForgetScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={{ padding: Spacing * 2 }}>
                <Pressable>
                <Ionicons name="arrow-back-outline" color={Colors.text}  size={Spacing*2}/>
                </Pressable>
                <View style={{ marginTop: 35}}>
                    <ImageBackground style={styles.ImageStyle} source={require('../../../assets/LoginImages/Forgot.png')} resizeMode="contain" />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text1}>Forgot Password ?</Text>
                    <Text style={styles.subtext2}>Don't Worry! It happens, please enter the email address associated with your account below:</Text>

                </View>
                <View style={{ padding: Spacing * 3 }} > 
                    <AppTextInput  placeholder="Email"  />
                </View>

                <TouchableOpacity style={styles.submitButton}
                onPress={()=>navigation.navigate("Verify")}>
                
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ForgetScreen


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
        marginVertical: Spacing ,
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
        fontFamily:Font['poppins-bold'],
        fontSize:FontSize.medium,
        color:"grey",
        marginBottom:12,
    
    },
   


})