import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import FontSize from '../../constants/FontSize'

const MyButton = (props) => {
  return (
    <View>
      <Pressable
      onPress={props.onPressFunction}
      hitSlop={{top:10,bottom:10,right:10,left:10}}
      android_ripple={{color:"#00f"}}
      style={({pressed})=>[
        {backgroundColor:pressed?"#dddddd":props.color},
        styles.button,
        {...props.style}
    ]}
      >
        <Text style={styles.text}>
            {props.title}
        </Text>

      </Pressable>
    </View>
  )
}

export default MyButton

const styles = StyleSheet.create({
    text:{
        color:"#000000",
        fontSize:20,
        margin:10,
        textAlign:"center"
    },
    button:{
        width:150,
        height:150,
        alignItems:"center"
    }

})