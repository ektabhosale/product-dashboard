import {
  UPDATE_PRODUCT,
  GET_PRODUCT,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
  CLEAR_PRODUCT,
  DELETE_SELECTED_PRODUCT,
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

// actions
export const addPRODUCT = (PRODUCT) => ({
  type: CREATE_PRODUCT,
  payload: PRODUCT,
});

// get a PRODUCT




// delete a PRODUCT
export const deletePRODUCT = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

// select all PRODUCT
export const selectAllPRODUCT = (id) => ({
  type: SELECT_PRODUCT,
  payload: id,
});

// clear selected PRODUCTs
export const clearAllPRODUCT = () => ({
  type: CLEAR_PRODUCT,
});

// delete selected PRODUCTs
export const deleteAllPRODUCT = () => ({
  type: DELETE_SELECTED_PRODUCT,
});