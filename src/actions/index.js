import axios from 'axios';
import { featuredEndP } from 'helpers/endpoints';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_NEW_ITEMS_SUCCESS = 'FETCH_NEW_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const REMOVE_WISHLIST_ITEM = 'REMOVE_WISHLIST_ITEM';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

const API_HOST = 'localhost';
const API_PORT = '1337';

export const API_URL = `http://${API_HOST}:${API_PORT}`;

export const PRODUCT_FETCH_LIMIT = 12;

export const fetchProducts = (endpoint = '', isNew = false) => async (
  dispatch,
  getState,
) => {
  const start = isNew ? getState().products.length : 0;
  const limit = isNew
    ? getState().products.length + PRODUCT_FETCH_LIMIT
    : PRODUCT_FETCH_LIMIT;

  const actionType = isNew ? FETCH_NEW_ITEMS_SUCCESS : FETCH_ITEMS_SUCCESS;

  const URL =
    endpoint === featuredEndP
      ? `${API_URL}/products?${endpoint}`
      : `${API_URL}/products?_start=${start}&_limit=${limit + endpoint}`;

  dispatch({ type: FETCH_ITEMS_REQUEST });
  try {
    const { data } = await axios.get(URL);
    dispatch({
      type: actionType,
      payload: {
        container: endpoint === featuredEndP ? 'featured' : 'products',
        items: data.map(
          ({ id, Name, Description, category, image, size, price }) => ({
            id,
            name: Name,
            description: Description,
            category: category.name,
            image: `${API_URL + image.url}`,
            size,
            price: price.toFixed(2),
          }),
        ),
      },
    });
  } catch (err) {
    const { status } = err.response;
    dispatch({ type: FETCH_ITEMS_FAILURE, payload: status });
  }
};

export const fetchCategories = () => async dispatch => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });
  try {
    const { data } = await axios.get(`${API_URL}/categories`);
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: data.map(({ name, total }) => ({ name, total })),
    });
  } catch (err) {
    const { status } = err.response;
    dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: status });
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

export const removeCartItem = (itemID, container, size = '') => dispatch => {
  dispatch({ type: SHOW_LOADING, payload: 1000 });
  setTimeout(() => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: {
        itemID,
        size,
        container,
      },
    });
    dispatch({ type: HIDE_LOADING });
  }, 1000);
};

export const removeWishlistItem = itemID => dispatch => {
  dispatch({ type: SHOW_LOADING, payload: 600 });
  setTimeout(() => {
    dispatch({
      type: REMOVE_WISHLIST_ITEM,
      payload: {
        itemID,
      },
    });
    dispatch({ type: HIDE_LOADING });
  }, 600);
};

export const setSearchValue = value => {
  return {
    type: SET_SEARCH_VALUE,
    payload: value,
  };
};
