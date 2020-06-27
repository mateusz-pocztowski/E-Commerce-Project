import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import HomeView from 'views/HomeView';
import UserView from 'views/UserView';
import CatalogView from 'views/CatalogView';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <MainTemplate>
      <AnimatePresence>
        <Switch>
          <Route exact path="/cart" component={UserView} />
          <Route exact path="/wishlist" component={UserView} />
          <Route exact path="/catalog" component={CatalogView} />
          <Route exact path="/" component={HomeView} />
        </Switch>
      </AnimatePresence>
    </MainTemplate>
  );
};

export default Root;
