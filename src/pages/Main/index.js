import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';
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

  render() {
    const { products } = this.state;
    const { addToCart } = this.props;

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

              <ButtonAddToCart onPress={() => addToCart(item)}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Main);
