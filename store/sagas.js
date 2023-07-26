import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PRODUCTS_FETCH, GET_PRODUCTS_SUCCESS } from './actins';

function productsFetch() {
  return fetch(
    'http://www.mocky.io/v2/5e3940013200005e00ddf87e?mocky-delay=600ms'
  ).then((res) => {
    return res.json();
  });
}

function* workGetProductFetch() {
  try {
    const products = yield call(productsFetch);
    yield put({ type: GET_PRODUCTS_SUCCESS, products });
  } catch (error) {
    console.log(error);
  }
}

function* mySaga() {
  yield takeEvery(GET_PRODUCTS_FETCH, workGetProductFetch);
}

export default mySaga;
