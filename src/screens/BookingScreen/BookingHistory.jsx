import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    TouchableHighlight
  } from 'react-native';
import Colors from '../../../constants/Colors';
import HistoryBookingData from './HistoryBookingData';
  
  const BookingHistory = ({navigation}) => {
    return (
      <View >
        <View  style={styles.headingBackGround}>
          <View>
          <Text style={styles.heading}>Booking</Text>
          <Text style={styles.subheading}>see your upcoming booking</Text>
          </View>
          <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.ongoingButton}
            onPress={() => navigation.navigate("BookingDetails")}

           >
            <Text style={styles.ongoingButtonText}>ONGOING</Text>
           </TouchableOpacity>
           <TouchableHighlight style={styles.historyButton}
            onPress={() => navigation.navigate("BookingHistory")}
           underlayColor="#ddd"
           >
            <Text style={styles.historyButtonText}>HISTORY</Text>
           </TouchableHighlight>
          </View>
          </View>
          <View>

            <FlatList
              data={HistoryBookingData}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.subcontainer} >
                    <View style={styles.imageContainer}>
                      <Image source={item.image} style={styles.imageDoc} />
                    </View>
                    <View style={styles.addressContainer}>
                      <Text style={styles.name}>{item.title}</Text>
                      <Text style={styles.address}>{item.address}</Text>
                      <Text style={styles.timing}>{item.time}</Text>
                      <View style={styles.locationButtonContainer}>
                        <TouchableOpacity style={styles.getDirectionButton}>
                          <Text style={styles.getDirectionText}>
                            Get Direction
                          </Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.cancelButton}>
                          <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
  
                );
              }}
            />
          </View>
  
  
  
       
  
      </View>
  
    );
  };
  
  
  export default BookingHistory
  
  const styles = StyleSheet.create({
   
    headingBackGround: {
      backgroundColor: Colors.primary,
      margin:10,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      paddingVertical:20
    },
    heading: {
      marginLeft: 25,
      margin: 5,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    subheading: {
      marginLeft: 29,
      color: 'white',
      fontSize: 15,
    },
    subcontainer: {
      flex:2,
      flexDirection:"row",
      margin:10,
      width: '95%',
      height: 140,
      borderRadius: 20,
      shadowOpacity: 0.8,
      shadowRadius: 4,
      shadowColor: '#000000',
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      
  
    },
    imageContainer: {
      justifyContent: "center",
      alignItems:"center"
    },
  
    imageDoc: {
      width: 95,
      height: 105,
      borderRadius: 30,
      border: 5,
      borderWidth: 2,
      borderColor: "black",
      marginStart:10
    },
    addressContainer: {
      flex: 1,
      flexDirection: "column",
      marginHorizontal:20,
    },
    name: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 3
    },
    address: {
      fontWeight: '400',
      fontSize: 14,
      marginTop: 4,
      color: 'black',
  
    },
    timing: {
      fontWeight: '600',
      fontSize: 12,
      color: "grey",
      marginTop: 2
  
    },
    locationButtonContainer: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-evenly",
      padding:10,
      marginEnd:20,
      
      
      
      
    },
    //Button Styles
    ongoingButton: {
      
      backgroundColor: Colors.lightPrimary,
      borderRadius: 13,
      paddingVertical:10,
      paddingHorizontal:25
  
     
    },
    historyButton: {
      backgroundColor: Colors.primary,
      borderRadius: 13,
      paddingVertical:10,
      paddingHorizontal:25
  
     
    },
    ongoingButtonText: {
      fontSize: 15,
      color: Colors.primary,
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      borderColor: "white",
      paddingHorizontal: 12,
    },
    historyButtonText: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      borderColor: "white",
      paddingHorizontal: 12,
  
    },
    buttonContainer: {
      flexDirection:"row" ,
      justifyContent:"center",
      justifyContent:"space-evenly",
      margin:20,
      paddingVertical:5,
    },
    getDirectionButton: {
  
      backgroundColor: "white",
      borderRadius: 7,
      paddingVertical: 10,
    },
    cancelButton: {
      elevation: 8,
      backgroundColor:Colors.primary,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 13,
    },
    getDirectionText: {
      fontSize: 12,
      color: Colors.primary,
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      
  
    },
    cancelText: {
      fontSize: 13,
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
  
  });
  