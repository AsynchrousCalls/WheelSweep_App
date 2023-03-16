import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import AppTextInput from '../components/AppTextInput.'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const RegisterScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ padding: Spacing * 1.8 }}>
                <View style={styles.mainView}>
                    <Text style={styles.text1}>Create account</Text>
                    <Text style={styles.text2}>Create an account so you can explore all nearby service stations in your area</Text>
                </View>
                <View >
                    <AppTextInput placeholder="Email" />
                    <AppTextInput placeholder="Password" secureTextEntry/>
                    <AppTextInput placeholder="Confirm Password" secureTextEntry/>
                </View>
                
                <TouchableOpacity style={styles.signButton}>
                    <Text style={styles.signintext}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createAccountButton}>
                    <Text style={styles.alreadyAccountText}>Already have an account?</Text>
                </TouchableOpacity>
                <View style={{ marginVertical: Spacing * 2 }}>
                    <Text style={styles.contniueWithText}>Or Continue With</Text>
                    <View style={styles.iconView}>
                        <TouchableOpacity style={styles.iconStyle}>
                        <FontAwesome5 name={'google'} size={27} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconStyle}>
                        <FontAwesome5 name={'facebook'} size={27}  color="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconStyle}>
                        <FontAwesome5 name={'twitter'} size={27}  color="black"/>
                        </TouchableOpacity>
                    </View>
                </View>



            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    mainView: {
        padding: Spacing * 1,
        alignItems: "center"
    },
    text1: {
        fontSize: FontSize.xLarge,
        color: Colors.primary,
        fontFamily: Font['poppins-bold'],
        marginVertical: Spacing * 2,
        fontWeight: "bold"
    },
    text2: {
        fontSize: FontSize.medium,
        fontFamily: Font['poppins-semiBold'],
        maxWidth: "100%",
        textAlign: "center",
        marginBottom:25
    },
    // emailInput: {
    //     fontFamily: Font['poppins-regular'],
    //     fontSize: FontSize.small,
    //     padding: Spacing * 2,
    //     backgroundColor: Colors.lightPrimary,
    //     borderRadius: Spacing
    // },
    // passwordInput: {

    //     fontFamily: Font['poppins-regular'],
    //     fontSize: FontSize.small,
    //     padding: Spacing * 2,
    //     backgroundColor: Colors.lightPrimary,
    //     borderRadius: Spacing,
    //     marginVertical: Spacing
    // },
    forgetpass: {
        fontFamily: Font["poppins-bold"],
        fontSize: FontSize.small,
        color: Colors.primary,
        alignSelf: "flex-end"
    },
    signButton: {
        padding: Spacing * 2,
        backgroundColor: Colors.primary,
        marginVertical: Spacing * 2,
        borderRadius: Spacing,
        shadowColor: Colors.gray,
        shadowOffset: {
            width: 0,
            height: Spacing

        },
        shadowOpacity: 0.3,
        shadowRadius: Spacing
    },
    signintext: {
        fontFamily: Font["poppins-bold"],
        color: Colors.onPrimary,
        textAlign: "center",
        fontSize: FontSize.large

    },
    createAccountButton: {
        padding: Spacing * 2,
    },
    alreadyAccountText: {
        fontFamily: Font["poppins-bold"],
        color: Colors.text,
        textAlign: "center",
        fontSize: FontSize.small,
        fontWeight:"bold"

    },
    contniueWithText: {
        fontFamily: Font["poppins-semibold"],
        color: Colors.primary,
        textAlign: "center",
        fontSize: FontSize.small,
        fontWeight:"bold",
        marginBottom:10
    },
    iconStyle: {
        padding: Spacing,
        backgroundColor: Colors.gray,
        borderRadius: 30,
        marginHorizontal: Spacing
    },
    iconView: {
        marginTop: Spacing,
        flexDirection: "row",
        justifyContent: "center",
        
    }

})