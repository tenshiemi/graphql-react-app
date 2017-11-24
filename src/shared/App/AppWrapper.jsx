import React from 'react';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';
import NewProjectContainer from '../../scenes/NewProject/NewProjectContainer';

const AppWrapper = () => (
  <div className="group">
    <Header />
    <Switch>
      <Route exact path='/' component={NewProjectContainer} />
    </Switch>
  </div>
);

export default AppWrapper;
