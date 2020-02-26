import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const Cart = ({ cart }) => {
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
              <IconDelete />
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
};

const mapStateToProps = ({ cart }) => ({
  cart,
});

export default connect(mapStateToProps)(Cart);
