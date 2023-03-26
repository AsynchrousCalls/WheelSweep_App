import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../constants/color';
const DATA = [
  {
    id: '1',
    comment: 'Here the reviews of service stations given by the user are shown that will be very helpfull for the new user to decide whether to avail service or not',
    uri: 'https://cdn.pixabay.com/photo/2017/03/27/14/58/car-wash-2179231_960_720.jpg',
  },
  {
    id: '2',
    comment: 'Here the reviews of service stations given by the user are shown that will be very helpfull for the new user to decide whether to avail service or not',
    uri: 'https://cdn.pixabay.com/photo/2017/10/21/17/18/auto-2875254_960_720.jpg',
  },
  {
    id: '3',
    comment: 'Here the reviews of service stations given by the user are shown that will be very helpfull for the new user to decide whether to avail service or not',
    uri: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
  },
  {
    id: '4',
    comment: 'Here the reviews of service stations given by the user are shown that will be very helpfull for the new user to decide whether to avail service or not',
    uri: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
  },
  {
    id: '5',
    comment: 'Here the reviews of service stations given by the user are shown that will be very helpfull for the new user to decide whether to avail service or not',
    uri: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
  },
  {
    id: '6',
    comment: 'Here the reviews of service stations given by the user are shown that will be very helpfull for the new user to decide whether to avail service or not',
    uri: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
  },
];

const Item = ({item, onPress, backgroundColor,}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
  <View style={styles.review}>
   <Image style={styles.image} source={require("../../../assets/images/profiilee.jpg")} />
  <View style={styles.info}>
       <Text style={styles.name}>Mr.Wash</Text>
       {/*<View style={styles.icons}>
       <Ionicons name="md-call" size={32} color="green" />
       <Ionicons name="logo-whatsapp" size={32} color="green" />
       </View>*/}
       <View style={styles.icons}>
       <Icon name="star" size={20} color={COLORS.blue} />
       <Icon name="star" size={20} color={COLORS.blue} />
       <Icon name="star" size={20} color={COLORS.blue} />
       <Icon name="star-outline" size={20} color={COLORS.blue} />
       <Icon name="star-outline" size={20} color={COLORS.blue} />
       </View>
      
       </View>
       
       </View>
    <View style={styles.card}>
    <Text style={styles.comment}>{item.comment}</Text>
    </View>
  </TouchableOpacity>
);

const ThirdRoute = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#c2c2c2' : "white";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
       
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
  },

 review: {
    flexDirection:'row'
  },
  item: {
    padding: 2,
    margin:10,
    borderWidth:1,
    borderRadius:10,
    borderColor:COLORS.black
  },

  card: {
    
  },
  comment: {
    fontSize: 15,
    margin:5,
    padding:5,
    //  backgroundColor:'#fff',
     borderWidth:0,
    borderRadius:0
    
  },
  image:{
    height:50,
    width:50,
    borderRadius:50,
    marginLeft:10,
    marginHorizontal:10,
    marginTop:5
    
  },
  info:{
  
  },
  name:{
    fontSize:22,
    fontWeight:"bold"
  },
  icons:{
    flex:1,
    flexDirection:'row',
    margin:5,
    
  }
});

export default ThirdRoute;