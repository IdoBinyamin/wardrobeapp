import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import Success from './screens/Success';
import ShoesChoise from './screens/ShoesChoise';
import ShirtChoice from './screens/ShirtChoice';
import PantsChoice from './screens/PantsChoice';
import DrawerNavigator from './navigators/DrawerNav';
import { store } from './store/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="home"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Shoes" component={ShoesChoise} />
            <Stack.Screen name="Shirts" component={ShirtChoice} />
            <Stack.Screen name="Pants" component={PantsChoice} />
            <Stack.Screen name="success" component={Success} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
