import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground, Pressable, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Spacing from '../../../constants/Spacing'
import FontSize from '../../../constants/FontSize'
import Colors from '../../../constants/Colors'
import Font from '../../../constants/Font'
import AppTextInput from '../../components/AppTextInput'
import Ionicons from 'react-native-ionicons'
const { height } = Dimensions.get("window")

const ResetScreen = ({navigation}) => {
    return (
        
            <KeyboardAvoidingView>
            <View style={{ padding: Spacing * 1 }}>
                <Pressable>
                <Ionicons name="arrow-back-outline" color={Colors.text}  size={Spacing*2}/>
                </Pressable>
                <View style={{ marginTop: 30}}>
                    <ImageBackground style={styles.ImageStyle} source={require('../../../assets/LoginImages/ResetPassword.png')} resizeMode="contain" />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text1}>Reset Password ?</Text>
                </View>
                <View style={{marginHorizontal:20}}>
                <View style={{ padding: Spacing }} > 
                    <AppTextInput  placeholder="Password"  secureTextEntry />
                </View>
                <View style={{ padding: Spacing}} > 
                    <AppTextInput  placeholder="Confirm Password" secureTextEntry />
                </View>
                </View>

                <TouchableOpacity style={styles.submitButton}
                onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
       
    )
}

export default ResetScreen


const styles = StyleSheet.create({

   
    ImageStyle: {
        height: height / 3.5,

    },
    textView: {
        paddingHorizontal: Spacing * 2.8,
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