import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { auth, db } from "../firebase";
import { withRouter } from "react-router-dom";
import firebase from "firebase/app";


const createNotes = ({ history }) => {
    return (
      <div className="div-flex">
        <div>
          <h1 className="centered">Create Notes</h1>  
          <CreateNoteForm history={history} />
        </div>
      </div>
    );
  };




  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
  });
  
  const INITIAL_STATE = {
    name: "",
    subject:"",
    description:"",
    link:"",
  };
  
  class CreateNoteForm extends Component {
    state = { ...INITIAL_STATE };

    onSubmit = event => {
     event.preventDefault();

    const {name,subject,description,link } = this.state;
    const { history } = this.props;  
    console.log(name,subject,description,link)
    var user = firebase.auth().currentUser;
    console.log("User ",user.uid)
    const author=user.uid
    db.doCreateNotes(
       name,
       subject,
       description,
       author,
       link
      )
        .then(() => {
          history.push("/home"); //redirects to Home Page
        })
        .catch(error => {
          this.setState(byPropKey("error", error));
        });
    };
  
    
    render() {
      const { name, subject, description,error, showingAlert,link } = this.state;
      return (
        <div>
          {showingAlert && (
            <Alert color="danger" onLoad={this.timer}>
              {error.message}
            </Alert>
          )}
  
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Notes Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleEmail"
                value={name}
                onChange={event =>
                  this.setState(byPropKey("name", event.target.value))
                }
              />
            </FormGroup>
         
            <FormGroup>
              <Label for="exampleEmail">Notes Subject</Label>
              <Input
                type="text"
                name="subject"
                id="exampleSubject"
                value={subject}
                onChange={event =>
                  this.setState(byPropKey("subject", event.target.value))
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Notes Description</Label>
              <Input
                type="text"
                name="description"
                id="exampleDescription"
                value={description}
                onChange={event =>
                  this.setState(byPropKey("description", event.target.value))
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDescription">Notes URL</Label>
              <Input
                type="url"
                name="link"
                id="exampleDescription"
                value={link}
                onChange={event =>
                  this.setState(byPropKey("link", event.target.value))
                }
              />
            </FormGroup>
          
  
            <div className="text-center">
              <Button type="submit">
                Submit Notes
              </Button>
            </div>
          </Form>
  
          <hr />
        </div>
      );
    }
  }


export default createNotes;
