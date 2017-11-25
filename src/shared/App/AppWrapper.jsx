import React from 'react';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';
import NewProjectContainer from '../../scenes/NewProject/NewProjectContainer';
import './AppWrapper.css';

const AppWrapper = () => (
  <div className="AppWrapper">
    <Header />
    <Switch>
      <Route exact path="/" component={NewProjectContainer} />
    </Switch>
  </div>
);

export default AppWrapper;
