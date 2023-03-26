import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';

import files from '../../../assets/filesBase64';
import Colors from '../../../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreen = ({navigation}) => {

  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Search Nearby Service Station to your current location.',
      url: "https://images.unsplash.com/photo-1471782517485-c81d26d8572c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 25}}>
          <Avatar.Image 
            source={require("../../../assets/images/blue_wheel.jpg")}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Hussein Info</Title>
            <Caption style={styles.caption}>@info.com</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Lahore, Pakistan</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+92-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>info.hussein000@email.com</Text>
        </View>
      </View>

     
      <ScrollView>
      <View style={styles.menuWrapper}>
      <TouchableRipple onPress={()=>navigation.navigate("Edit")}>
          <View style={styles.menuItem}>
            <Icon name="face-man-profile" color={Colors.primary} size={25}/>
            <Text style={styles.menuItemText}>My Account</Text>
            <View style={{marginStart:207}}>
            <Icon name="chevron-right" color={Colors.primary} size={30} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>navigation.navigate("Favorites")}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color={Colors.primary} size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
            <View style={{marginStart:188}}>
            <Icon name="chevron-right" color={Colors.primary} size={30} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple >
          <View style={styles.menuItem}>
            <Icon name="credit-card" color={Colors.primary}  size={25}/>
            <Text style={styles.menuItemText}>Your Coupon</Text>
            <View style={{marginStart:200}}>
            <Icon name="chevron-right" color={Colors.primary} size={30} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color={Colors.primary}  size={25}/>
            <Text style={styles.menuItemText}>Invite Friends</Text>
            <View style={{marginStart:195}}>
            <Icon name="chevron-right" color={Colors.primary} size={30} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>navigation.navigate("Help")}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color={Colors.primary}  size={25}/>
            <Text style={styles.menuItemText}>Support & Help</Text>
            <View style={{marginStart:180}}>
            <Icon name="chevron-right" color={Colors.primary} size={30} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>navigation.navigate("Terms")}>
          <View style={styles.menuItem}>
            <Icon name="book-plus" color={Colors.primary} size={25}/>
            <Text style={styles.menuItemText}>Term of Services</Text>
            <View style={{marginStart:165}}>
            <Icon name="chevron-right" color={Colors.primary} size={30} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate("Welcome")}>
          <View style={{flexDirection:"row",marginLeft:10,marginTop:15}}>
            <Icon name="logout-variant" color={Colors.primary} size={35}/>
            <Text style={{color:"#1F41BB",fontSize:20,fontWeight:"bold",marginLeft:10}}>Logout</Text>
          </View>
        </TouchableRipple>
       
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:15
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 0,
    marginHorizontal:5,
    marginVertical:5,
  
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth:1,
    borderRadius:20,
    marginHorizontal:2,
    marginVertical:7.5
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});