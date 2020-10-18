import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";
// import logo from './logo.svg';
import './App.css';
import { firebase } from "../firebase";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import withAuthentication from "./withAuthentication";

const App = () => (
  <BrowserRouter>
    <Container>
      {/* <Navigation /> */}
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
    </Container>
  </BrowserRouter>
)

// export default App;
export default withAuthentication(App); //using HoC to handle session