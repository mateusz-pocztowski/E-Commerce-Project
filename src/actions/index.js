import axios from 'axios';

export const FETCH_ALL_REQUEST = 'FETCH_ALL_REQUEST';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';
export const FETCH_ALL_FAILURE = 'FETCH_ALL_FAILURE';

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

const API_HOST = 'localhost';
const API_PORT = '1337';

const API_URL = `${API_HOST}:${API_PORT}`;

const PRODUCT_FETCH_LIMIT = 12;

export const fetchProducts = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_ALL_REQUEST });
  try {
    const { data } = await axios.get(
      `http://${API_URL}/products?_start=${getState().products.length}&_limit=${
        getState().products.length + PRODUCT_FETCH_LIMIT
      }`,
    );
    dispatch({
      type: FETCH_ALL_SUCCESS,
      payload: data.map(
        ({ id, Name, Description, category, image, size, price }) => ({
          id,
          name: Name,
          description: Description,
          category: category.name,
          image: `http://${API_URL + image.url}`,
          size,
          price: price.toFixed(2),
        }),
      ),
    });
  } catch (err) {
    const { status } = err.response;
    dispatch({ type: FETCH_ALL_FAILURE, payload: status });
  }
};

export const updateCartItem = item => dispatch => {
  dispatch({ type: SHOW_LOADING, payload: 700 });
  setTimeout(() => {
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: item,
    });
    dispatch({ type: HIDE_LOADING });
  }, 700);
};

export const addItem = (item, container) => (dispatch, getState) => {
  if (
    getState().cart.some(({ id, size }) => id === item.id && size === item.size)
  ) {
    const updatedItem = {
      ...item,
      quantity: item.quantity + 1,
    };
    dispatch(updateCartItem(updatedItem));
  } else {
    dispatch({ type: SHOW_LOADING, payload: 1500 });
    setTimeout(() => {
      dispatch({
        type: ADD_ITEM,
        payload: {
          item,
          container,
        },
      });
      dispatch({ type: HIDE_LOADING });
    }, 1500);
  }
};

export const removeItem = (itemID, size, container) => dispatch => {
  dispatch({ type: SHOW_LOADING, payload: 1000 });
  setTimeout(() => {
    dispatch({
      type: REMOVE_ITEM,
      payload: {
        itemID,
        size,
        container,
      },
    });
    dispatch({ type: HIDE_LOADING });
  }, 1000);
};
