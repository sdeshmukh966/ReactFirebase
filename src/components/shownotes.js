import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { withRouter } from "react-router-dom";
import { auth, db } from "../firebase";

const INITIAL_STATE = {
    name: "",
    subject: "",
    description: "",
    author: "",
    link: "",
    error: null,
    showingAlert: false
};

const SignInPage = ({ history }) => {
    return (
      <div className="div-flex">
        <div>
          <h1 className="centered">Notes</h1>
          {/* <img src={logo} className="App-logo" alt="My logo" /> */}
  
          <Notes history={history} />
          {/* <SignUpLink />
          <PasswordForgetLink /> */}
        </div>
      </div>
    );
};

class Notes extends Component {
    state = { ...INITIAL_STATE };

    onLoad = event => {
      const { name, subject, description, author, link } = this.state;
  
      const { history } = this.props;
  
      auth
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          history.push("/");
        })
        .catch(error => {
          this.setState(byPropKey("error", error));
          this.timer(); //defined below
        });
  
      event.preventDefault();
    };
  
    // facebookLogin = () => {
    //   const { history } = this.props;
    //   auth
    //     .doFacebookSignIn()
    //     .then(authUser => {
    //       console.log("authUser", authUser);
  
    //       db.doCreateUser(
    //         //store some info from facebook into the firebase db
    //         authUser.user.uid,
    //         authUser.user.displayName,
    //         authUser.user.email
    //       )
    //         .then(() => {
    //           // this.setState({
    //           //   ...INITIAL_STATE
    //           // });
    //           history.push("/"); //redirects to Home Page
    //         })
    //         .catch(error => {
    //           this.setState(byPropKey("error", error));
    //         });
    //     })
    //     .catch(error => {
    //       this.setState(byPropKey("error", error));
    //     });
    // };
  
    // timer = () => {
    //   this.setState({
    //     showingAlert: true
    //   });
  
    //   setTimeout(() => {
    //     this.setState({
    //       showingAlert: false
    //     });
    //   }, 4000);
    // };
  
    render() {
      const { name, subject, description, author, link, error, showingAlert } = this.state;
  
      const isInvalid = password === "" || email === "";
  
      return (
        <div>
          {showingAlert && (
            <Alert color="danger" onLoad={this.timer}>
              {error.message}
            </Alert>
          )}
  
          {/* <Form onLoad={this.onLoad}> */}
            {/* <FormGroup> */}
                <P>{name}</P>
                <P>{subject}</P>
                <P>{description}</P>
                <P>{author}</P>
                <P>{link}</P>
                {/* <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="user@gmail.com"
                    value={email}
                    onChange={event =>
                    this.setState(byPropKey("email", event.target.value))
                    }
                /> */}
            {/* </FormGroup> */}
            {/* <FormGroup> */}
              {/* <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="pass-test"
                value={password}
                onChange={event =>
                  this.setState(byPropKey("password", event.target.value))
                }
              /> */}
            {/* </FormGroup> */}
  
            <div className="text-center">
              <Button disabled={isInvalid} type="submit">
                Sign In
              </Button>
            </div>
          {/* </Form> */}
  
          <hr />
  
          <FacebookLoginButton onClick={this.facebookLogin} />
          {/* <button onClick={this.facebookLogin}>Login with Facebook</button> */}
        </div>
      );
    }
}