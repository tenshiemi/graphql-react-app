import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppWrapper from './shared/App/AppWrapper';

const Root = () => (
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);

export default Root;
