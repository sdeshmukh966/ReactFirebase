// Home page.
import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Button,Form, FormGroup,Label ,Input } from "reactstrap";
import { db } from "../firebase/firebase";

const deletePost=(note)=>{
  console.log("Deleting this post",note.name)
  db.ref(`notes/${note.name}`).remove()
}

const updatePost=(note)=>{
  console.log("Deleting this post",note.name)
  db.ref(`notes/${note.name}`).remove()
}

class HomePage extends Component{
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      toggle:false,
      // curr_note:null
      cname:"",
      csubject:"",
      cdescription:"",
      clink:""
    }
  }

  updateNote=(note)=>{
    const {cname,csubject,cdescription,clink}=this.state;
    console.log(cname,csubject,cdescription,clink)
    db.ref(`notes`).child(note.name).update({'name':cname,'subject':csubject,'description':cdescription,'link':clink})
    console.log("Updated")
  }
  componentDidMount() {
    db.ref("notes").on("value", snapshot => {
      let allNotes = [];

      snapshot.forEach(snap => {
        const note=snap.val()
        note.toggle=false
        allNotes.push(note);
      });
      // console.log(allNotes)
      this.setState({ notes: allNotes });
    });
  }
  
 
  render(){
    const {notes}=this.state;
    const {toggle}=this.state;
    console.log(notes)

    
    return(     
      <div>   
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5 mb-5">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler ml-3" >
        <span className="navbar-toggler-icon"></span>
        </button>
        </nav>
        <div>
          {this.state.notes.map(note => {
            return (
              <div key={note.name}>
                <div className="card mb-3 shadow-box-example hoverable">
                <div className="card-body">
                <h3>{note.name}</h3>
                  <p>Subject: {note.subject}</p>
                  <p>{note.description}</p>
                  <a href={note.link} className="card-link btn btn-primary">View</a>
                  <Button onClick={()=>deletePost(note)} className="ml-3">Delete</Button>
                  <Button onClick={()=> { 
                    note.toggle=!note.toggle 
                    this.setState({note})
                    console.log("State",this.state)
                    this.setState({cname:note.name,csubject:note.subject,cdescription:note.description,clink:note.link})
                    }
                    } className="ml-3">Edit</Button>
                </div> 
                { note.toggle ?
                (
                  <div>
                   <h3>Edit Form</h3>
                   <Form >
                   <FormGroup>
              <Label for="exampleEmail">Notes Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleEmail"
                value={this.state.cname}
                onChange={ event => this.setState({cname:event.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Notes Subject</Label>
              <Input
                type="text"
                name="subject"
                id="exampleSubject"
                value={this.state.csubject} 
                onChange={ event => this.setState({csubject:event.target.value})}

              />
            </FormGroup>
            <FormGroup>
              <Label>Notes Description</Label>
              <Input
                type="text"
                name="description"
                id="exampleDescription"
                value={this.state.cdescription}      
                onChange={ event => this.setState({cdescription:event.target.value})}

              />
            </FormGroup>
            <FormGroup>
              <Label>Notes URL</Label>
              <Input
                type="url"
                name="link"
                id="exampleDescription"
                value={this.state.clink}
                onChange={ event => this.setState({clink:event.target.value})}
              />
            </FormGroup>
          
  
            <div className="text-center">
              <Button onClick={this.updateNote(note)}>
                Update Notes
              </Button>
            </div>
                   </Form>
                  </div>
                )
                : null
                }
              </div>
                
              </div>
            );
          })}
        </div>
      </div>

    );  
  } 
}

export default HomePage;