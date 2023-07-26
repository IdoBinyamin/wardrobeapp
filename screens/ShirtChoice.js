import { StyleSheet } from 'react-native';
import React from 'react';
import ProductPage from '../components/ProductPage';
import { useSelector } from 'react-redux';

export default function ShirtChoice({ navigation }) {
  const products = useSelector((state) => state.products);
  const productsList = products.products.results;

  return (
    <ProductPage
      products={productsList.filter((p) => {
        return p.type === 'shirt';
      })}
    />
  );
}

const styles = StyleSheet.create({});
