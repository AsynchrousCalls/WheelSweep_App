import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Keyboard, Alert } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../../constants/color'
import Input from '../../components/Input'
import Button from '../../components/CustomButton'
import Loader from '../../components/Loader'

const RegisterationScreen = ({navigation}) => {

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = React.useState(false);
    const [inputs, setInputs] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    });
    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;
        if (!inputs.email) {
            handleErrors("Please input email", "email")
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleErrors('Please input a valid email', 'email');
            isValid = false;
        }
        if (!inputs.firstName) {
            handleErrors('Please input First Name', 'firstName');
            isValid = false;
        }

        if (!inputs.lastName) {
            handleErrors('Please input Last Name', 'lastName');
            isValid = false;
        }

        if (!inputs.password) {
            handleErrors('Please input password', 'password');
            isValid = false;
        } else if (inputs.password.length < 5) {
            handleErrors('Min password length of 5', 'password');
            isValid = false;
        }
        if (isValid) {
            register();
        }
    };

    const register = ({navigation}) => {
        setLoading(true);
        setTimeout(() => {
            try {
                setLoading(false);
                AsyncStorage.setItem('userData', JSON.stringify(inputs));
                navigation.navigate('Login');
            } catch (error) {
                Alert.alert('Error', 'Something went wrong');
            }
        }, 3000);


    };

    const handleOnChange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }))

    };
    const handleErrors = (errorMessage, input) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }))

    }
    console.log(inputs)

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <Loader visible={loading} />
            <ScrollView
                contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ color: COLORS.blue, fontSize: 40, fontWeight: 'bold' }}>
                    Register
                </Text>
                <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
                    Enter Your Details to Register
                </Text>

                <View style={{ marginVertical: 5 }}>
                    <Input
                        iconName="email-outline"
                        label="Email"
                        placeholder="Enter your email address "
                        onChangeText={text => handleOnChange(text, "email")}
                        error={errors.email}
                        onFocus={() => {
                            handleErrors(null, "email")
                        }}
                    />
                    <Input
                        iconName="account-outline"
                        label="First Name"
                        placeholder="Enter First Name "
                        onChangeText={text => handleOnChange(text, "firstName")}
                        error={errors.firstName}
                        onFocus={() => {
                            handleErrors(null, "firstName")
                        }}
                    />
                    <Input
                        iconName="account-outline"
                        label="Last Name"
                        placeholder="Enter Last Name "
                        onChangeText={text => handleOnChange(text, "lastName")}
                        error={errors.lastName}
                        onFocus={() => {
                            handleErrors(null, "lastName")
                        }}
                    />
                    <Input
                        iconName="lock-outline"
                        label="Password"
                        placeholder="Enter Password "
                        password
                        onChangeText={text => handleOnChange(text, "password")}
                        error={errors.password}
                        onFocus={() => {
                            handleErrors(null, "password")
                        }}
                    />
                </View>
                {/* Validate Funstion call in button for validation */}
                <Button title="Register" onPress={()=>navigation.navigate("Login")} />
                <Text
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        color: COLORS.black,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 16,
                    }}>
                    Already have an account ?Login
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterationScreen

const styles = StyleSheet.create({
    alreadyText: {
        color: COLORS.black,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    }
})