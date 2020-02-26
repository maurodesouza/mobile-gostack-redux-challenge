import React from 'react';

import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const Cart = ({ cart, removeFromCart }) => {
  return (
    <Container>
      <List
        data={cart}
        ListFooterComponent={
          <>
            <TotalText>Total</TotalText>
            <TotalPrice>R$234,90</TotalPrice>
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
                <IconAdd />
                <WrapperFooterInput value="1" />
                <IconRemove />
              </WrapperFooterBox>

              <WrapperPrice>{item.formattedPrice}</WrapperPrice>
            </WrapperFooter>
          </Wrapper>
        )}
      />
    </Container>
  );
};

Cart.propTypes = {
  cart: PropTypes.instanceOf(Array).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = ({ cart }) => ({
  cart,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
