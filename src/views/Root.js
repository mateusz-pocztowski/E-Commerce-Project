import MainTemplate from 'templates/MainTemplate';
import HomeView from 'views/HomeView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={HomeView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
