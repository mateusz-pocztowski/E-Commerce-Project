import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { initialState } from 'reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem('storeState')
  ? JSON.parse(localStorage.getItem('storeState'))
  : initialState;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
  localStorage.setItem('storeState', JSON.stringify(store.getState()));
});

export default store;
