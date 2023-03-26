import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../../constants/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({
  label,
  iconName,
  password,
  error,
  onFocus = () => { },
  ...props //for rest of the props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hidePassword, setHidePassword] = useState(false)
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, { borderColor: error ? COLORS.red : isFocused ? COLORS.blue : COLORS.light }]}>
        <Icon name={iconName} style={styles.iconStyle} />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          style={{ color: COLORS.darkBlue, flex: 1 }}
          {...props}
        />
        {password && (
        <Icon onPress={() => setHidePassword(!hidePassword)}
            style={{ fontSize: 22, color: COLORS.blue ,marginTop:15}}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
          />
        )}

      </View>
      {error && <Text style={styles.errorMessage}>{error}</Text>}

    </View>
  )
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.lightBlue,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10
  },
  iconStyle: {
    fontSize: 22, color:
      COLORS.blue,
    marginRight: 10,
    marginTop: 15
  },
  errorMessage: {
    color: COLORS.red,
    fontSize: 12,
    marginTop: 7
  }

});

export default Input;