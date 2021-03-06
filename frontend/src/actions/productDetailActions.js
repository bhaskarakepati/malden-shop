import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
} from "../constants/productConstants";
import axios from "axios";

export const getProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${productId}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
