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
    amount: PropTypes.instanceOf(Object).isRequired,
    addToCartRequest: PropTypes.func.isRequired,
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
    const { addToCartRequest, amount } = this.props;

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

              <ButtonAddToCart onPress={() => addToCartRequest(item.id)}>
                <ButtonAddToCartWrapper>
                  <IconShoppingCart />
                  <ButtonAddToCartAmount>
                    {amount[item.id] || 0}
                  </ButtonAddToCartAmount>
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

const mapStateToProps = ({ cart }) => ({
  amount: cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
