import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function StyledButton({
  style,
  onPress,
  text,
  icon,
}) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={[styles.textFixStyle]}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textFixStyle: {
    color: 'white',
  },
});
