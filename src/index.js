import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import ScrollToTop from 'helpers/ScrollToTop';
import { Provider } from 'react-redux';
import store from 'store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
