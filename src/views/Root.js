import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import HomeView from 'views/HomeView';
import UserView from 'views/UserView';
import CatalogView from 'views/CatalogView';
import { Route, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <MainTemplate>
      <Switch>
        <Route exact path="/cart" component={UserView} />
        <Route exact path="/wishlist" component={UserView} />
        <Route exact path="/catalog" component={CatalogView} />
        <Route exact path="/" component={HomeView} />
      </Switch>
    </MainTemplate>
  );
};

export default Root;
