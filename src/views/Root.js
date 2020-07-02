import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import HomeView from 'views/HomeView';
import CartView from 'views/CartView';
import CatalogView from 'views/CatalogView';
import WishlistView from 'views/WishlistView';
import DetailsView from 'views/DetailsView';
import CheckoutView from 'views/CheckoutView';
import { Route, Switch } from 'react-router-dom';
import NotFoundView from 'views/NotFoundView';

const Root = () => {
  return (
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/cart" component={CartView} />
        <Route exact path="/wishlist" component={WishlistView} />
        <Route exact path="/catalog" component={CatalogView} />
        <Route exact path="/catalog/:id" component={DetailsView} />
        <Route exact path="/checkout/" component={CheckoutView} />
        <Route component={NotFoundView} />
      </Switch>
    </MainTemplate>
  );
};

export default Root;
