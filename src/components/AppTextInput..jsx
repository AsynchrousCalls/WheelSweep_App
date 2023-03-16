import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import Spacing from '../../constants/Spacing'
import Font from '../../constants/Font'
import FontSize from '../../constants/FontSize'
const AppTextInput= (otherprops) => {
    const [focused,setFocused]=useState(false)
  return (
    <TextInput style={[
        {
            fontFamily: Font['poppins-regular'],
            fontSize: FontSize.small,
            padding: Spacing * 2,
            backgroundColor: Colors.lightPrimary,
            borderRadius: Spacing,
            marginVertical:Spacing
        },
            focused  && {
                borderWidth:3,
                borderColor:Colors.primary,
                shadowOffset:{width:4,height:Spacing},
                shadowColor:Colors.primary,
                shadowOpacity:0.4,
                shadowRadius:Spacing
            }

    ]}
    onFocus={()=>setFocused(true)}
    onBlur={()=>setFocused(false)}
    placeholder='Email' placeholderTextColor={Colors.darkText} 
    {...otherprops}
    />

  )
}

export default AppTextInput

