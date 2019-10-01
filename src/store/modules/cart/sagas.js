import {call, put, all, takeLatest, select} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';
import {addToCartSuccess, updateAmountSuccess} from './actions';

function* addToCart({id}) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );
  const stock = yield call(api.get, `/stock/${id}`);
  const amountStock = stock.data.amount;
  const amountCurrent = productExists ? productExists.amount : 0;

  const amount = amountCurrent + 1;
  if (amount > amountStock) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }
  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({id, amount}) {
  if (amount <= 0) {
    return;
  }
  const stock = yield call(api.get, `/stock/${id}`);
  const amountStock = stock.data.amount;

  if (amount > amountStock) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_REQUEST', updateAmount),
]);
