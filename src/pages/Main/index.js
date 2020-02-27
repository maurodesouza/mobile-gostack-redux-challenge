import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addToCartRequest } from '../../store/modules/cart/actions';
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

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(data);
    };

    loadProducts();
  }, []);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

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

            <ButtonAddToCart
              onPress={() => dispatch(addToCartRequest(item.id))}
            >
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
};

export default Main;
