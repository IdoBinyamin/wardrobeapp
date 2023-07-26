import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import ProductsShow from '../models/ProductsShow';

export default function ProductPage({ products }) {
  const [isChooseSize, setIsChooseSize] = useState(false);
  const [choosenProduct, setChoosenProduct] = useState();
  const choosingSizeHandler = (product) => {
    setChoosenProduct(product);
    isSizesShow();
  };
  const isSizesShow = () => {
    setIsChooseSize(!isChooseSize);
  };

  return (
    <View style={styles.container}>
      <ProductsShow
        products={products}
        choosingSizeHandler={choosingSizeHandler}
        choosenProduct={choosenProduct}
        isChooseSize={isChooseSize}
        isSizesShow={isSizesShow}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  headlineContainer: {
    height: 70,
  },
  headlineText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  searchLine: {
    borderRadius: 5,
    borderWidth: 1,
    width: 200,
  },
  itemsList: {
    width: '95%',
    height: 300,
  },
});
