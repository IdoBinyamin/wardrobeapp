import { StyleSheet } from 'react-native';
import React from 'react';
import ProductPage from '../components/ProductPage';
import { useSelector } from 'react-redux';

export default function PantsChoice({ navigation }) {
  const products = useSelector((state) => state.products);
  const productsList = products.products.results;

  return (
    <ProductPage
      products={productsList.filter((p) => {
        return p.type === 'pants';
      })}
    />
  );
}

const styles = StyleSheet.create({});
