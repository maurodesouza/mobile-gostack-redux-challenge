import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  flex-grow: 0;
`;

export const Wrapper = styled.View`
  background: ${colors.fourth};
  padding: 10px;
  border-radius: 5px;
  margin: 0px 7.5px;
  width: 220px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  padding-top: 5px;
  margin-top: 5px;
  font-size: 16px;
  line-height: 20px;
  color: #333;
  font-family: Roboto-Regular;
`;

export const Price = styled.Text`
  margin: 5px 0 20px;
  font: 20px Roboto-Bold;
  color: #000;
`;

export const ButtonAddToCart = styled(RectButton)`
  background: ${colors.third};
  margin-top: auto;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonAddToCartWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.2);
`;

export const ButtonAddToCartAmount = styled.Text`
  color: ${colors.fourth};
  font-size: 14px;
  font-family: Roboto-Regular;
`;

export const IconShoppingCart = styled(Icon).attrs({
  name: 'add-shopping-cart',
  size: 14,
})`
  margin-right: 5px;
  color: ${colors.fourth};
`;

export const ButtonAddToCartText = styled.Text`
  flex: 1;
  text-align: center;
  color: ${colors.fourth};
  text-transform: uppercase;
  font-family: Roboto-Bold;
  letter-spacing: 1px;
`;
