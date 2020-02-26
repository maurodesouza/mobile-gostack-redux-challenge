import { call, put, all, takeLatest } from 'redux-saga/effects';

import { formatPrice } from '../../../util/format';
import { addToCartSuccess } from './actions';
import api from '../../../services/api';

function* addToCart({ id }) {
  const { data } = yield call(api.get, `/products/${id}`);

  yield put(
    addToCartSuccess({
      ...data,
      amount: 1,
      formattedPrice: formatPrice(data.price),
    })
  );
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
