import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import StyledButton from '../Ui/StyledButton';
import { useDispatch } from 'react-redux';
import { addShirt, addPants, addShoes } from '../store/completeSet';
import { useNavigation } from '@react-navigation/native';
import SizesView from './SizesView';
import SearchBar from './SearchBar';

export default function ProductsShow({
  products,
  choosingSizeHandler,
  choosenProduct,
  isChooseSize,
  isSizesShow,
}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addItem = (p, choosenSize) => {
    if (p.type === 'shirt') {
      dispatch(
        addShirt({ brand: p.brand, color: p.itemColor, size: choosenSize })
      );
    }
    if (p.type === 'pants') {
      dispatch(
        addPants({ brand: p.brand, color: p.itemColor, size: choosenSize })
      );
    }
    if (p.type === 'shoes') {
      dispatch(
        addShoes({ brand: p.brand, color: p.itemColor, size: choosenSize })
      );
    }
    navigation.goBack();
  };

  const isProductChoose = (p, choosenSize) => {
    Alert.alert(
      'You want this item?',
      `brand: ${p.brand}, color: ${p.itemColor}, size: ${choosenSize}`,
      [
        {
          text: 'Yes',
          onPress: () => {
            addItem(p, choosenSize);
          },
        },
        { text: 'No', onPress: isSizesShow },
      ]
    );
  };

  const [serachType, setSerachType] = useState('name');
  const [items, setItems] = useState(products);

  const serachHandler = (event) => {
    let serchedProducts;
    if (serachType === 'name') {
      serchedProducts = products.filter((p) => {
        return p.name.toLowerCase().includes(event.toLowerCase());
      });
    }
    if (serachType === 'brand') {
      serchedProducts = products.filter((p) => {
        return p.brand.toLowerCase().includes(event.toLowerCase());
      });
    }
    setItems(serchedProducts);
  };

  return (
    <>
      <SearchBar serachHandler={serachHandler} serachType={serachType} />
      <View style={styles.searchButtonsChoice}>
        <Text>Swipe search type: </Text>
        <StyledButton
          text={'name'}
          style={styles.searchOptions}
          onPress={() => setSerachType('name')}
        />
        <StyledButton
          text={'brand'}
          style={styles.searchOptions}
          onPress={() => setSerachType('brand')}
        />
        <StyledButton
          text={'color'}
          style={styles.searchOptions}
          // onPress={() => setSerachType('color')}
        />
        <StyledButton
          text={'size'}
          style={styles.searchOptions}
          // onPress={() => setSerachType('size')}
        />
      </View>
      <Text style={{ marginBottom: 5, marginTop: 5 }}>
        There is {items.length} items too choose from
      </Text>
      <ScrollView style={styles.itemsList}>
        {items.map((p, itemIndex) => (
          <View key={itemIndex} style={styles.itemContainer}>
            <Text>
              name: {p.name}
              {'\n'}
            </Text>
            <Text>
              brand: {p.brand}
              {'\n'}
            </Text>
            <View style={styles.itemColorsContainer}>
              {p.colors.map((c, colorsIndex) => (
                <StyledButton
                  key={colorsIndex}
                  style={{
                    backgroundColor: c,
                    width: 70,
                    height: 35,
                    marginRight: 3,
                  }}
                  onPress={() =>
                    choosingSizeHandler({
                      name: p.name,
                      type: p.type,
                      brand: p.brand,
                      itemColor: p.colors[colorsIndex],
                      sizes: [...p.sizes],
                    })
                  }
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      {isChooseSize && (
        <SizesView
          choosenProduct={choosenProduct}
          isProductChoose={isProductChoose}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  searchButtonsChoice: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  searchOptions: {
    marginRight: 5,
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(1, 118, 255, 1)',
  },
  itemsList: {
    flex: 3,
  },
  itemContainer: {
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 370,
  },
  itemColorsContainer: {
    flexDirection: 'row',
    marginRight: 5,
    marginBottom: 5,
  },
});
