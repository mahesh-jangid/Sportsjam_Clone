import products from "./products.json";
import {
  INCREASE_QTY,
  DECREASE_QTY,
  SORT_DATA,
  SET_COUNT,
  CART_DATA,
  DESCRIPTION_DATA,
  DELETE_CART_DATA,
} from "./action.type";

const initState = {
  cartdata: [],
  products: [...products],
  count: 0,
};

export const dataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CART_DATA: {
      return {
        ...state,
        cartdata: payload,
        count: payload.length,
      };
    }
    case INCREASE_QTY: {
      return {
        ...state,
        cartData: [
          ...state.cartdata.map((item) => {
            if (item.id == payload) {
              item.qty += 1;
            }
          }),
        ],
      };
    }
    case DECREASE_QTY: {
      return {
        ...state,
        cartData: [
          ...state.cartdata.map((item) => {
            if (item.id == payload) {
              item.qty--;
            }
          }),
        ],
      };
    }
    case SORT_DATA: {
      return {
        ...state,
        sortedData: [...payload],
      };
    }
    case DESCRIPTION_DATA: {
      return {
        ...state,
        discriptionData: payload,
      };
    }
    case DELETE_CART_DATA: {
      return {
        ...state,
        cartdata: state.cartdata.filter((item) => item.id !== payload),
        count: state.count - 1,
      };
    }

    case SET_COUNT: {
      return {
        ...state,
        count: payload,
      };
    }

    default: {
      return state;
    }
  }
};
