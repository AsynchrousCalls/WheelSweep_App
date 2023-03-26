import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Spacing from '../../../constants/Spacing'
import FontSize from '../../../constants/FontSize'
import Colors from '../../../constants/Colors'
import Font from '../../../constants/Font'
import Input from '../../components/Input'
import Button from '../../components/CustomButton';

const { height } = Dimensions.get("window")

const ForgotScreen = () => {
    const [inputs, setInputs] = React.useState({email: ''});
    const [errors, setErrors] = React.useState({});  
    const validate = async () => {
    //   Keyboard.dismiss();
      let isValid = true;
      if (!inputs.email) {
        handleError('Please input email', 'email');
        isValid = false;
      }else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
        handleError('Please input a valid email', 'email');
        isValid = false;
    }if (isValid) {
        OTP();
      }
    };

    const OTP= ({navigation}) => {
        setTimeout(async () => {
          let userData = await AsyncStorage.getItem('userData');
          if (userData) {
            userData = JSON.parse(userData);
            if (
              inputs.email == userData.email
            ) {
              navigation.navigate('OTP');
              AsyncStorage.setItem(
                'userData',
                JSON.stringify({...userData, loggedIn: true}),
              );
            } else {
              Alert.alert('Error', 'Invalid Details');
            }
          } else {
            Alert.alert('Error', 'User does not exist');
          }
        }, 2000);
      };
  
    const handleOnchange = (text, input) => {
      setInputs(prevState => ({...prevState, [input]: text}));
    };
  
    const handleError = (error, input) => {
      setErrors(prevState => ({...prevState, [input]: error}));
    };

   

    return (
        <SafeAreaView>
            <View style={{ padding: Spacing * 2 }}>
                <View style={{ marginTop: 35 }}>
                    <ImageBackground style={styles.ImageStyle} source={require('../../../assets/LoginImages/Forgot.png')} resizeMode="contain" />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text1}>Forgot Password ?</Text>
                    <Text style={styles.subtext2}>Don't Worry! It happens, please enter the email address associated with your account below:</Text>

                </View>
                <Input
                    onChangeText={text => handleOnchange(text, 'email')}
                    onFocus={() => handleError(null, 'email')}
                    iconName="email-outline"
                    placeholder="Enter your email address"
                    error={errors.email}
                />
             <Button title="Submit" onPress={validate} />
            </View>
        </SafeAreaView>
    )
}

export default ForgotScreen


const styles = StyleSheet.create({


    ImageStyle: {
        height: height / 3.5,

    },
    textView: {
        paddingHorizontal: Spacing * 3,
        paddingTop: Spacing,

    },

    text1: {
        fontSize: 45,
        color: Colors.primary,
        fontFamily: Font['poppins-bold'],
        fontWeight: "bold"
    },

    submitButton: {
        padding: Spacing * 1.4,
        marginHorizontal: Spacing * 3,
        backgroundColor: Colors.primary,
        marginVertical: Spacing,
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
        fontWeight: "bold"

    },
    subtext2: {
        fontFamily: Font['poppins-bold'],
        fontSize: FontSize.medium,
        color: "grey",
        marginBottom: 12,

    },



})