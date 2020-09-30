import {
  UPDATE_PRODUCT,
  GET_PRODUCT,
} from "../constant/types";

// update a PRODUCT
export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});
export const getProduct = (name) => ({
  type: GET_PRODUCT,
  payload: name,
});

