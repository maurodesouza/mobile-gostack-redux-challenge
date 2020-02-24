import React from 'react';
import { Text, Button } from 'react-native';

// import { Container } from './styles';

const Cart = ({ navigation }) => {
  return (
    <>
      <Text> Hmm ... Cart </Text>
      <Button title="Cart" onPress={() => navigation.navigate('Main')} />
    </>
  );
};

export default Cart;
