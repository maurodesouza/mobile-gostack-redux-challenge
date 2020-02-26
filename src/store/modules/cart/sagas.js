import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import api from '../../../services/api';

function* addToCart({ id }) {
  const productExist = yield select(state => state.cart.find(p => p.id === id));

  const {
    data: { amount: stockAmount },
  } = yield call(api.get, `/stock/${id}`);

  const amountToUpdate = productExist ? productExist.amount + 1 : 0;

  if (amountToUpdate > stockAmount) return null;

  if (productExist) {
    return yield put(updateAmountSuccess(id, amountToUpdate));
  }

  const { data } = yield call(api.get, `/products/${id}`);

  return yield put(
    addToCartSuccess({
      ...data,
      amount: 1,
      formattedPrice: formatPrice(data.price),
    })
  );
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return null;

  const {
    data: { amount: stockAmount },
  } = yield call(api.get, `stock/${id}`);
  console.tron.log(stockAmount);
  if (amount > stockAmount) return null;

  return yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
