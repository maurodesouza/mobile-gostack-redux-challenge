import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

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
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

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
              <Price>{item.formattedPrice}</Price>

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
