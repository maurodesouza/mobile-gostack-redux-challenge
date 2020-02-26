import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  background: ${colors.fourth};
  margin: 0 20px 20px;
  flex-grow: 0;
  border-radius: 5px;
  padding: 0 10px 0;
`;

export const Wrapper = styled.View`
  margin-top: 20px;
`;

export const WrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperHeaderImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const WrapperHeaderBox = styled.View`
  flex: 1;
  margin: 0 10px;
`;

export const WrapperHeaderTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: #333;
  font-family: Roboto-Regular;
`;

export const WrapperPrice = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: Roboto-Bold;
`;

export const WrapperFooter = styled.View`
  background: #eee;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`;

export const WrapperFooterBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperFooterInput = styled.TextInput.attrs({
  editable: false,
})`
  background: ${colors.fourth};
  border: 1px solid #ddd;
  padding: 0 10px;
  border-radius: 5px;
  margin: 0 5px;
  color: #999;
`;

export const IconAdd = styled(Icon).attrs({
  name: 'add-circle-outline',
  size: 20,
})`
  color: ${colors.third};
`;

export const IconRemove = styled(Icon).attrs({
  name: 'remove-circle-outline',
  size: 20,
})`
  color: ${colors.third};
`;

export const IconDelete = styled(Icon).attrs({
  name: 'delete',
  size: 20,
})`
  color: ${colors.third};
`;

export const TotalText = styled.Text`
  text-align: center;
  text-transform: uppercase;
  color: #999;
  font-family: Roboto-Bold;
  margin-top: 30px;
  font-size: 20px;
`;

export const TotalPrice = styled.Text`
  text-align: center;
  text-transform: uppercase;
  color: #000;
  font-family: Roboto-Bold;
  font-size: 30px;
`;

export const ButtonCheckout = styled(RectButton)`
  background: ${colors.third};
  border-radius: 5px;
  padding: 10px 0;
  margin: 30px 0 10px;
`;

export const ButtonCheckoutText = styled.Text`
  text-align: center;
  text-transform: uppercase;
  color: ${colors.fourth};
  font-family: Roboto-Bold;
  font-size: 14px;
`;

export const EmptyCart = styled.View`
  background: ${colors.fourth};
  border-radius: 5px;
  margin: 0 10px;
  align-items: center;
  padding: 10px 0;
`;

export const EmptyCartText = styled.Text`
  color: #333;
  font-family: Roboto-Regular;
  font-size: 20px;
  margin-top: 10px;
`;

export const IconEmptyCart = styled(Icon).attrs({
  name: 'remove-shopping-cart',
  size: 120,
})`
  color: #ddd;
`;
