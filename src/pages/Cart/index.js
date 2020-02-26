import React from 'react';

import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import Container from '../../components/Container';
import {
  List,
  Wrapper,
  WrapperHeader,
  WrapperHeaderBox,
  WrapperHeaderImage,
  WrapperPrice,
  WrapperHeaderTitle,
  WrapperFooter,
  WrapperFooterBox,
  WrapperFooterInput,
  IconAdd,
  IconRemove,
  IconDelete,
  TotalText,
  TotalPrice,
  ButtonCheckout,
  ButtonCheckoutText,
} from './styles';

const Cart = ({ cart, total, removeFromCart, updateAmountRequest }) => {
  const increment = ({ id, amount }) => {
    updateAmountRequest(id, amount + 1);
  };

  const decrement = ({ id, amount }) => {
    updateAmountRequest(id, amount - 1);
  };

  return (
    <Container>
      <List
        data={cart}
        ListFooterComponent={
          <>
            <TotalText>Total</TotalText>
            <TotalPrice>{total}</TotalPrice>
            <ButtonCheckout>
              <ButtonCheckoutText>Finalizar Compra</ButtonCheckoutText>
            </ButtonCheckout>
          </>
        }
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => (
          <Wrapper>
            <WrapperHeader>
              <WrapperHeaderImage source={{ uri: item.image }} />
              <WrapperHeaderBox>
                <WrapperHeaderTitle>{item.title}</WrapperHeaderTitle>
                <WrapperPrice>{item.formattedPrice}</WrapperPrice>
              </WrapperHeaderBox>
              <IconDelete onPress={() => removeFromCart(item.id)} />
            </WrapperHeader>

            <WrapperFooter>
              <WrapperFooterBox>
                <IconAdd onPress={() => increment(item)} />
                <WrapperFooterInput value={String(item.amount)} />
                <IconRemove onPress={() => decrement(item)} />
              </WrapperFooterBox>

              <WrapperPrice>{item.subtotal}</WrapperPrice>
            </WrapperFooter>
          </Wrapper>
        )}
      />
    </Container>
  );
};

Cart.propTypes = {
  cart: PropTypes.instanceOf(Array).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = ({ cart }) => ({
  cart: cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    cart.reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0)
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
