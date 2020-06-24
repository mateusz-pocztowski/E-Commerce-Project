import MainTemplate from 'templates/MainTemplate';
import HomeView from 'views/HomeView';
import UserView from 'views/UserView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/cart" component={UserView} />
        <Route exact path="/wishlist" component={UserView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
