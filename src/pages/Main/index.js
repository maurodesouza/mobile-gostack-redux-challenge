import React from 'react';
import { Text, Button } from 'react-native';

// import { Container } from './styles';

const Main = ({ navigation }) => {
  return (
    <>
      <Text> Hmm ... Hellow </Text>
      <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
    </>
  );
};

export default Main;
