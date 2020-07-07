import { createStore, applyMiddleware } from 'redux';
import rootReducer, { initialState } from 'reducers';
import thunk from 'redux-thunk';

const persistedState = localStorage.getItem('storeState')
  ? {
      ...JSON.parse(localStorage.getItem('storeState')),
      featured: [],
      searchValues: {
        search: '',
        categories: [],
      },
    }
  : initialState;

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem('storeState', JSON.stringify(store.getState()));
});

export default store;
