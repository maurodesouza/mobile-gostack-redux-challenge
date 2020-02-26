import React, { Component } from 'react';

import { connect } from 'react-redux';

import api from '../../services/api';

import Container from '../../components/Container';

import {
  List,
  Wrapper,
  Price,
  Image,
  Title,
  ButtonAddToCart,
  ButtonAddToCartWrapper,
  ButtonAddToCartText,
  ButtonAddToCartAmount,
  IconShoppingCart,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data } = await api.get('/products');

    this.setState({ products: data });
  }

  addToCart(product) {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          horizontal
          data={products}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => (
            <Wrapper>
              <Image source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Price>{item.price}</Price>

              <ButtonAddToCart onPress={() => this.addToCart(item)}>
                <ButtonAddToCartWrapper>
                  <IconShoppingCart />
                  <ButtonAddToCartAmount>1</ButtonAddToCartAmount>
                </ButtonAddToCartWrapper>

                <ButtonAddToCartText> Adicionar </ButtonAddToCartText>
              </ButtonAddToCart>
            </Wrapper>
          )}
        />
      </Container>
    );
  }
}

export default connect()(Main);
