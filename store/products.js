import { GET_PRODUCTS_SUCCESS } from './actins';

const myFirstReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { products: action.products };
    default:
      return state;
  }
};
export default myFirstReducer;
