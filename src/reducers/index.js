import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
} from 'actions';

export const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  isOverlayVisible: false,
  errorID: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_REQUEST:
      return {
        ...state,
      };
    case FETCH_ALL_FAILURE:
      return {
        ...state,
        errorID: action.payload,
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
