import React from 'react';

import { useSelector } from 'react-redux';

import { Container, Logo, Wrapper, SizeCart, ShoppingBasket } from './styles';

const Header = ({ navigate }) => {
  const cartSize = useSelector(({ cart }) => cart.length);

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

export default Header;
