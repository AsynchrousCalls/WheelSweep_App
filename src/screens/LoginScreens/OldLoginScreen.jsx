import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Spacing from '../../../constants/Spacing'
import FontSize from '../../../constants/FontSize'
import Colors from '../../../constants/Colors'
import Font from '../../../constants/Font'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';

const OldLoginScreen = ({navigation}) => {
    return (
        <View style={{backgroundColor:"white"}}>
            <View style={{ padding: Spacing * 2 }}>
                <View style={styles.mainView}>
                    <Text style={styles.text1}>Login  here</Text>
                    <Text style={styles.text2}>Welcome back you've been missed</Text>
                </View>
                <View style={{ marginVertical: Spacing * 3 }}>
                    <TextInput style={styles.emailInput} placeholder='Email' placeholderTextColor={Colors.darkText} />
                    <TextInput style={styles.passwordInput} secureTextEntry placeholder='Password' placeholderTextColor={Colors.darkText} />
                </View>
                <View>
                    <TouchableOpacity 
                     onPress={()=>navigation.navigate("Forgot")}
                    >
                    <Text style={styles.forgetpass}>Forget your Password ?</Text>
                    </TouchableOpacity>
                   
                </View>
                <TouchableOpacity style={styles.signButton}
                 onPress={()=>navigation.navigate("HomeScreen")}
                >
                    <Text style={styles.signintext}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccountButton}
                onPress={()=>navigation.navigate("Register")}

                >
                    <Text style={styles.createAccountText}>Create new account</Text>
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
        </View>
    )
}

export default OldLoginScreen 

const styles = StyleSheet.create({
    mainView: {
        padding: Spacing * 2,
        alignItems: "center"
    },
    text1: {
        fontSize: FontSize.xLarge,
        color: Colors.primary,
        fontFamily: Font['poppins-bold'],
        marginVertical: Spacing * 3,
        fontWeight: "bold"
    },
    text2: {
        fontSize: FontSize.large,
        fontFamily: Font['poppins-semiBold'],
        maxWidth: "60%",
        textAlign: "center",
        fontWeight: "bold"
    },
    emailInput: {
        fontFamily: Font['poppins-regular'],
        fontSize: FontSize.small,
        padding: Spacing * 2,
        backgroundColor: Colors.lightPrimary,
        borderRadius: Spacing
    },
    passwordInput: {

        fontFamily: Font['poppins-regular'],
        fontSize: FontSize.small,
        padding: Spacing * 2,
        backgroundColor: Colors.lightPrimary,
        borderRadius: Spacing,
        marginVertical: Spacing
    },
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
    createAccountText: {
        fontFamily: Font["poppins-bold"],
        color: Colors.text,
        textAlign: "center",
        fontSize: FontSize.small

    },
    contniueWithText: {
        fontFamily: Font["poppins-semibold"],
        color: Colors.primary,
        textAlign: "center",
        fontSize: FontSize.small
    },
    iconStyle: {
        padding: Spacing,
        backgroundColor: Colors.gray,
        borderRadius: Spacing / 2,
        marginHorizontal: Spacing
    },
    iconView: {
        marginTop: Spacing,
        flexDirection: "row",
        justifyContent: "center"
    }

})