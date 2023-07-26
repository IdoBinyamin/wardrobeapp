import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Home';
import PantsChoice from '../screens/PantsChoice';
import ShirtChoice from '../screens/ShirtChoice';
import ShoesChoise from '../screens/ShoesChoise';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Application" component={Home} />
      <Drawer.Screen name="shirts" component={ShirtChoice} />
      <Drawer.Screen name="pants" component={PantsChoice} />
      <Drawer.Screen name="shoes" component={ShoesChoise} />
    </Drawer.Navigator>
  );
}
