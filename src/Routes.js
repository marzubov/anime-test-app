import React from 'react';
import { Route } from 'react-router-dom';
import ListContainer from './containers/List';
import DetailsContainer from './containers/Details';

export default () => (
  [
    <Route key="list" exact path="/" component={ListContainer}></Route>,
    <Route key="details" exact path="/:id" component={DetailsContainer}></Route>
  ]
);