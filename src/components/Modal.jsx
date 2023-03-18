import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Colors from '../../constants/Colors';
const Modal = (props) => {
    

    const [showWarning, setShowWarning] = useState(false)
    return (
        <View>
            <Modal
                visible={props.showWarning}
                transparent
                onRequestClose={() => setShowWarning(false)}
            >
                <View style={styles.ModelView}>
                   
                    <View style={styles.ModelWarning} >
                        <Text style={{ alignSelf: "center", fontSize: 15, fontWeight: "bold", color: "black" }}>{props.title}</Text>
                        <View style={styles.ModelButtonView}>
                            <TouchableOpacity style={styles.ModelNoButton}
                                onPress={() => setShowWarning(false)} >
                                <Text style={styles.ModelNoText}>
                                    NO
                                </Text>
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.ModelYesButton}
                                onPress={() => setShowWarning(false)}
                            >
                                <Text style={styles.ModelYesText}>YES</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Modal

const styles = StyleSheet.create({
    ModelView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000099",
        
    
      }
      ,
      ModelWarning: {
        width: 400,
        height: 165,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 20,
        padding:15,
    
      },
      ModelButtonView:{
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginEnd: 4,
      },
      ModelYesButton:{
        elevation: 8,
        backgroundColor: Colors.primary,
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 22,
        margin:25
      },
      ModelNoButton:{
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth:1,
        paddingVertical: 20,
        paddingHorizontal: 22,
        marginVertical:25
    
        
    
      }
      ,
      ModelYesText: {
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
      },
      ModelNoText: {
        fontSize: 13,
        color: 'red',
        fontWeight: 'bold',
        alignSelf: "center",
        textTransform: 'uppercase',
      },
})