import axios from 'axios';

export const FETCH_ALL_REQUEST = 'FETCH_ALL_REQUEST';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';
export const FETCH_ALL_FAILURE = 'FETCH_ALL_FAILURE';

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
