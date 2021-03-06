import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_NEW_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  UPDATE_STORE_REQUEST,
  UPDATE_STORE_SUCCESS,
  UPDATE_STORE_FAILURE,
  ADD_ITEM,
  UPDATE_CART_ITEM,
  REMOVE_CART_ITEM,
  REMOVE_WISHLIST_ITEM,
  SHOW_LOADING,
  HIDE_LOADING,
  SET_SEARCH_VALUE,
} from 'actions';

export const initialState = {
  products: [],
  featured: [],
  cart: [],
  wishlist: [],
  categories: [],
  isDataLoading: true,
  isOverlayVisible: false,
  loading: {
    isLoading: false,
    duration: 0,
  },
  searchValues: {
    search: '',
    categories: [],
  },
  errorID: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isDataLoading: true,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        errorID: action.payload,
        isDataLoading: false,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        [action.payload.container]: [...action.payload.items],
        isDataLoading: false,
      };
    case FETCH_NEW_ITEMS_SUCCESS:
      return {
        ...state,
        products: [...state.products, ...action.payload.items],
        isDataLoading: false,
      };
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        errorID: action.payload,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case UPDATE_STORE_REQUEST:
      return {
        ...state,
        loading: {
          isLoading: true,
          duration: action.payload,
        },
      };
    case UPDATE_STORE_FAILURE:
      return {
        ...state,
        errorID: action.payload,
        loading: {
          isLoading: false,
          duration: 0,
        },
      };
    case UPDATE_STORE_SUCCESS:
      return {
        ...state,
        cart: [],
        loading: {
          isLoading: false,
          duration: 0,
        },
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.container]: [
          ...state[action.payload.container],
          action.payload.item,
        ],
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map(cartItem =>
          cartItem.id === action.payload.id &&
          cartItem.size === action.payload.size
            ? action.payload
            : cartItem,
        ),
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          ({ id, size }) =>
            id !== action.payload.itemID || size !== action.payload.size,
        ),
      };
    case REMOVE_WISHLIST_ITEM:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          ({ id }) => id !== action.payload.itemID,
        ),
      };
    case SHOW_LOADING:
      return {
        ...state,
        loading: {
          isLoading: true,
          duration: action.payload,
        },
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: {
          isLoading: false,
          duration: 0,
        },
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValues: {
          ...state.searchValues,
          [action.payload.type]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
