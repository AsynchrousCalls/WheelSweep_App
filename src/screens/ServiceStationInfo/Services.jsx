import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import COLORS from '../../../constants/color';

const DATA = [
  {
    id: '1',
    title: 'Full Car Wash',
    price:'Rs 900'
  },
  {
    id: '2',
    title: 'Car Detailing',
    price:'Rs 500'
  },
  {
    id: '3',
    title: 'Interior Detailing',
    price:'Rs 800'
  },
  {
    id: '4',
    title: 'Exterior Washing',
    price:'Rs 700'
  },
  {
    id: '5',
    title: 'Others Service Packages',
    price:'Rs 700'
  },
  {
    id: '6',
    title: 'Full Services ',
    price:'Rs 800'
  },
];

const Item = ({item, onPress, backgroundColor,}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <View style={styles.card}>
    <View style={styles.title}>
    <Text style={styles.title}>{item.title}</Text>
    </View>
    <View style={styles.price}>
    <Text style={styles.price}>{item.price}</Text>
    </View>
    </View>
  </TouchableOpacity>
);

const MainServices = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#829baf' : COLORS.white;
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
  
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        
      />
     
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1b7890'
    
    
  },
 
  item: {
    padding: 2,
    margin:10,
    textAlign:'right',
    borderWidth:1,
    borderRadius:12,
    borderColor:COLORS.black
  },
  card: {
   justifyContent:'space-between',
    flexDirection:'row',
    margin:12,
    
  },
  title: {
    fontSize: 15,
    marginRight:10
    
  },
  price:{
    marginLeft:15,
   
  }
});

export default MainServices;