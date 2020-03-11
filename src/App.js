import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import './App.css';

export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Container>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Dark Mode</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="/signup">Sign Up</Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="/about">About</Link>
            </NavItem>
          </Nav>
          
        </Collapse>
        </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
