import React from 'react';

import { Container, Logo, Wrapper, SizeCart, ShoppingBasket } from './styles';

const Header = ({ navigate }) => {
  return (
    <Container>
      <Wrapper onPress={() => navigate('Main')}>
        <Logo />
      </Wrapper>

      <Wrapper onPress={() => navigate('Cart')}>
        <ShoppingBasket />
        <SizeCart>1</SizeCart>
      </Wrapper>
    </Container>
  );
};

export default Header;
