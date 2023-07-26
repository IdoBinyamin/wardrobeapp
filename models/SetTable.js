import React from 'react';
import { View, Text, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useSelector } from 'react-redux';
import { Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';

//make table function
const SetTable = ({ randomNumber }) => {
  //bring values insert to table
  const setComplition = useSelector(
    (state) => state.fullClothingSet.completeSet
  );
  const shirt = {
    icon: <Ionicons name={'shirt'} size={30} color="black" />,
    brand: setComplition.shirt.brand,
    color: setComplition.shirt.color,
    size: setComplition.shirt.size,
  };
  const pants = {
    icon: <Image source={require('../assets/pants.png')} />,
    brand: setComplition.pants.brand,
    color: setComplition.pants.color,
    size: setComplition.pants.size,
  };
  const shoes = {
    icon: (
      <MaterialCommunityIcons name={'shoe-sneaker'} size={35} color="black" />
    ),
    brand: setComplition.shoes.brand,
    color: setComplition.shoes.color,
    size: setComplition.shoes.size,
  };
  //table info:
  const data = [
    [shirt.icon, shirt.brand, shirt.color, shirt.size],
    [pants.icon, pants.brand, pants.color, pants.size],
    [shoes.icon, shoes.brand, shoes.color, shoes.size],
  ];

  return (
    <View
      style={{
        marginTop: 90,
        alignContent: 'center',
      }}
    >
      <Text style={{ fontSize: 18 }}>Youre new outfit:</Text>
      <View
        style={{
          padding: 30,
        }}
      >
        <Table
          borderStyle={{
            borderWidth: 5,
            borderColor: '#c8e1ff',
          }}
        >
          <Rows data={data} />
        </Table>
      </View>
    </View>
  );
};

export default SetTable;
