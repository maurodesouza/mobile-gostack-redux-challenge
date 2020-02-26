import React from 'react';

import { connect } from 'react-redux';

import { Container, Logo, Wrapper, SizeCart, ShoppingBasket } from './styles';

const Header = ({ navigate, cartSize }) => {
  return (
    <Container>
      <Wrapper onPress={() => navigate('Main')}>
        <Logo />
      </Wrapper>

      <Wrapper onPress={() => navigate('Cart')}>
        <ShoppingBasket />
        <SizeCart>{cartSize}</SizeCart>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartSize: cart.length,
});

export default connect(mapStateToProps)(Header);
