import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
  } from 'react-native';
  
  import CurrentBookingData from '../BookingScreen/CurrentBookingData';
  import Colors from '../../../constants/Colors';
 
  
  
  const Favourites = () => {
   
    return (
      <View  >

      
          <FlatList
            data={CurrentBookingData}
            keyExtractor={(item, index) => item.id}
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
                     
                      <TouchableOpacity style={styles.cancelButton}
                        onPress={() => setShowWarning(true)}
                      >
                        <Text style={styles.cancelText}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
  
              );
            }}
  
          />
       
      </View>
  
    );
  };
  
  
  export default Favourites
  
  const styles = StyleSheet.create({
  
    headingBackGround: {
      backgroundColor: Colors.primary,
      margin: 10,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      paddingVertical: 20
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
      flex: 2,
      flexDirection: "row",
      margin: 12,
      width: '95%',
      height: 140,
      borderRadius: 20,
      shadowOpacity: 0.8,
      shadowRadius: 4,
      shadowColor: '#000000',
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: "white",
  
  
    },
    imageContainer: {
      justifyContent: "center",
      alignItems: "center"
    },
  
    imageDoc: {
      width: 95,
      height: 105,
      borderRadius: 30,
      borderColor: "black",
      marginStart: 10
    },
    addressContainer: {
      flex: 1,
      flexDirection: "column",
      marginHorizontal: 20,
    },
    name: {
      marginVertical: 5,
      fontSize: 16,
      fontWeight: "700",
      marginBottom: 3,
      color: Colors.primary
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
      color: "red",
      marginTop: 2
  
    },
    locationButtonContainer: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-evenly",
      padding: 10,
      marginEnd: 20,
  
  
  
  
    },
    //Button Styles
    ongoingButton: {
  
      backgroundColor: Colors.lightPrimary,
      borderRadius: 13,
      paddingVertical: 10,
      paddingHorizontal: 25
  
  
    },
    historyButton: {
      backgroundColor: Colors.primary,
      borderRadius: 13,
      paddingVertical: 10,
      paddingHorizontal: 25
  
  
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
      flexDirection: "row",
      justifyContent: "center",
      justifyContent: "space-evenly",
      margin: 20,
      paddingVertical: 5,
    },
    getDirectionButton: {
  
      backgroundColor: "white",
      borderRadius: 7,
      paddingVertical: 10,
    },
    cancelButton: {
      elevation: 8,
      backgroundColor: Colors.primary,
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
  });
  