import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background: ${colors.first};
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  height: 24px;
`;

export const Wrapper = styled(RectButton)`
  position: relative;
`;

export const SizeCart = styled.Text`
  background: ${colors.third};
  color: ${colors.fourth};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  position: absolute;
  top: -9px;
  right: -7px;
  font-size: 10px;
  text-align: center;
`;

export const ShoppingBasket = styled(Icon).attrs({
  name: 'shopping-basket',
  size: 24,
})`
  color: ${colors.fourth};
`;
