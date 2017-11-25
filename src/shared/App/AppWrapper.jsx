import React from 'react';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';
import CollectionsContainer from '../../scenes/Collections/CollectionsContainer';
import NewProjectContainer from '../../scenes/NewProject/NewProjectContainer';
import './AppWrapper.css';

const AppWrapper = () => (
  <div className="AppWrapper">
    <Header />
    <Switch>
      <Route exact path="/" component={CollectionsContainer} />
      <Route exact path="/new/:id" component={NewProjectContainer} />
    </Switch>
  </div>
);

export default AppWrapper;
