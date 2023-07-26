import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({ serachHandler, serachType }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginRight: -22 }}
        />
        <TextInput
          style={{
            borderWidth: 2,
            width: 150,
            height: 25,
            paddingLeft: 20,
            borderRadius: 100,
          }}
          placeholder={'Search by ' + serachType}
          onChangeText={serachHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
