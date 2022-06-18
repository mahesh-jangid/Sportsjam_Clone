import {
  DELETE_CART_DATA,
  INCREASE_QTY,
  DECREASE_QTY,
  CART_DATA,
  DESCRIPTION_DATA,
  SORT_DATA,
  SET_COUNT,
} from "./action.type";

export const increase_qty = (payload) => {
  return {
    type: INCREASE_QTY,
    payload,
  };
};
export const decrease_qty = (payload) => {
  return {
    type: DECREASE_QTY,
    payload,
  };
};
export const sorted_data = (payload) => {
  return {
    type: SORT_DATA,
    payload,
  };
};
export const description_data = (payload) => {
  return {
    type: DESCRIPTION_DATA,
    payload,
  };
};
export const setCount = (payload) => {
  return {
    type: SET_COUNT,
    payload,
  };
};
export const delete_cart_data = (payload) => {
  return {
    type: DELETE_CART_DATA,
    payload,
  };
};
export const cart_data = (payload) => {
  return {
    type: CART_DATA,
    payload,
  };
};
