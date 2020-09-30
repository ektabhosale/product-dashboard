import {
  GET_PRODUCT,
  UPDATE_PRODUCT,

} from "../constant/types";
import { intialState } from "../db/product"

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return {
        products: [action.payload, ...state.products]
      }
    case GET_PRODUCT:
      let arr = state.products.filter(
        (product) => product.name == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        product: arr,
      };
    default:
      return state;
  }
};