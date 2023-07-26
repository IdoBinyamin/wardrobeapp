import { Button, Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import SetTable from '../models/SetTable';
import { useDispatch } from 'react-redux';
import {
  countSuccessSets,
  resetProgressCounter,
  addShirt,
  addPants,
  addShoes,
} from '../store/completeSet';

export default function Success({ navigation }) {
  const dispatch = useDispatch();

  const [randomNumber, setRandomNumber] = useState(getRandomInt(3));

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const makeAnotherSet = () => {
    dispatch(countSuccessSets());
    dispatch(resetProgressCounter());
    dispatch(addShirt(''));
    dispatch(addPants(''));
    dispatch(addShoes(''));

    navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        {randomNumber === 0 && (
          <Image
            source={require('../assets/download.png')}
            style={{ alignSelf: 'center' }}
          />
        )}
        {randomNumber === 1 && (
          <Image
            source={require('../assets/images.png')}
            style={{ alignSelf: 'center' }}
          />
        )}
        {randomNumber === 2 && (
          <Image
            source={require('../assets/expload.png')}
            style={{ alignSelf: 'center' }}
          />
        )}
      </View>
      <SetTable randomNumber={randomNumber} />
      <Button title="Make another set!" onPress={makeAnotherSet} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 50,
    alignContent: 'center',
  },
  imagesContainer: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
