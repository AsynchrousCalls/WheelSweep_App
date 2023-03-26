import React, {useState} from 'react';
import { View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet, } from 'react-native';

import AppTextInput from '../../components/AppTextInput';

import {useTheme} from 'react-native-paper';
import Colors from '../../../constants/Colors';


export default function HelpandSupport() {
    const {colors} = useTheme();

  return (
  
    <View style={styles.container}>
    
    <View style={styles.subContainer}>
         <Text style={styles.text}>Name : </Text>
         <AppTextInput placeholder="Name" />
    </View>
    <View style={styles.subContainer}>
         <Text style={styles.text}>Email :  </Text>
         <AppTextInput />
    </View>
    <View style={styles.subContainer}>
         <Text style={styles.text}>Mesages : </Text>
          <TextInput
            placeholder="Messages"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.message,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:30,
    marginVertical:80,
    borderColor: "#FFFFFF",
  },
 

  message:{
    borderColor: "gray",
    width: "100%",
    height:180,
    borderWidth: 2,
    borderRadius: 8,
    padding: 30,
  },
  subContainer:{
    
    flexDirection:"column"
  },
  commandButton: {
    padding: 19,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    marginTop: 80,
    
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  text:{
    margin:10,
    fontWeight:"700",
    fontSize:15,
    marginBottom:2,
    color:"black"
  }
});
