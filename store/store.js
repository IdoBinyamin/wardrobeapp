import { configureStore } from '@reduxjs/toolkit';
import fullSetRducer from './completeSet';
import productsListReducer from './products';
import myFirstReducer from './products';
import createSagaMiddleware from '@redux-saga/core';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    fullClothingSet: fullSetRducer,
    products: productsListReducer,
    myFirstReducer: myFirstReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);
