import React, { Component } from 'react';
import { Text, Button } from 'react-native';

import api from '../../services/api';

// import { Container } from './styles';

class Main extends Component {
  async componentDidMount() {
    await api.get('/products');
  }

  render() {
    const { navigation } = this.props;
    return (
      <>
        <Text> Hmm ... Hellow </Text>
        <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
      </>
    );
  }
}

export default Main;
