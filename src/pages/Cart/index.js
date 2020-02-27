import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { formatPrice } from '../../util/format';
import {
  updateAmountRequest,
  removeFromCart,
} from '../../store/modules/cart/actions';

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
  EmptyCart,
  EmptyCartText,
  IconEmptyCart,
} from './styles';

const Cart = () => {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.amount * product.price),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.amount * product.price;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  const increment = ({ id, amount }) => {
    dispatch(updateAmountRequest(id, amount + 1));
  };

  const decrement = ({ id, amount }) => {
    dispatch(updateAmountRequest(id, amount - 1));
  };

  return (
    <Container>
      {cart.length ? (
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
                <IconDelete onPress={() => dispatch(removeFromCart(item.id))} />
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
      ) : (
        <EmptyCart>
          <IconEmptyCart />
          <EmptyCartText>Seu carrinho esta vazio !</EmptyCartText>
        </EmptyCart>
      )}
    </Container>
  );
};

export default Cart;
