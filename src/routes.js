import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const { Screen, Navigator } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Main" component={Main} />
        <Screen name="Cart" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
