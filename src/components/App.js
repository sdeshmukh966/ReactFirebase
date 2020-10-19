import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";
// import logo from './logo.svg';
import './App.css';
import { firebase } from "../firebase";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import HomePage from "./HomePage"
import withAuthentication from "./withAuthentication";
import createNotes from "./createNotes";

const App = () => (
  <BrowserRouter>
    <Container>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/createnotes" component={createNotes} />
    </Container>
  </BrowserRouter>
)

export default withAuthentication(App);