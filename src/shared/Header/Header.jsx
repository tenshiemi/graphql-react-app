import React from 'react';
import { Div, Img } from 'glamorous';
import { Container } from '../styles';
import Nav from './Nav';
import logo from './logo.png';

const Header = () => (
  <Div borderBottom="1px solid black" height={60} textAlign="center">
    <Container>
      <Nav />
      <Img
        src={logo}
        alt="Slope logo"
        height={42}
        margin="9px auto"
        verticalAlign="middle"
      />
    </Container>
  </Div>
);

export default Header;
