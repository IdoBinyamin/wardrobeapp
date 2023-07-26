import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function StyledButton({ style, onPress, text }) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
  },
});
