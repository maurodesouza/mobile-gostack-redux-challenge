import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Cart from './pages/Cart';
import Header from './components/Header';

const { Screen, Navigator } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          header: ({ navigation }) => <Header navigate={navigation.navigate} />,
        }}
      >
        <Screen name="Main" component={Main} />
        <Screen name="Cart" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
