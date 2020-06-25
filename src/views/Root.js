import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import HomeView from 'views/HomeView';
import UserView from 'views/UserView';
import CatalogView from 'views/CatalogView';
import store from 'store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/cart" component={UserView} />
          <Route exact path="/wishlist" component={UserView} />
          <Route exact path="/catalog" component={CatalogView} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
