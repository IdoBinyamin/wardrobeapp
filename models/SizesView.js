import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StyledButton from '../Ui/StyledButton';

export default function SizesView({ choosenProduct, isProductChoose }) {
  return (
    <View style={styles.sizesButtonsContainer}>
      {choosenProduct.sizes.map((s, sizesIndex) => (
        <StyledButton
          style={styles.sizesButtons}
          key={sizesIndex}
          text={s.toString()}

          onPress={() => isProductChoose(choosenProduct, s)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sizesButtonsContainer: {
    flex: 0.5,
    top: 50,
    height: 50,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sizesButtons: {
    backgroundColor: ' rgba(1, 118, 255, 1)',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 3,
    width: 35,
    height: 50,
    alignItems: 'center',
  },
});
