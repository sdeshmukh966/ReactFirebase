// Home page.
import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Button,Form, FormGroup,Label ,Input,Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
NavbarText,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem
 } from "reactstrap";
import { db } from "../firebase/firebase";
import EditNotes from "./EditNotes"
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
    this.updateNote = this.updateNote.bind(this);

    this.state = {
      notes: [],
      toggle:false,
      cname:"",
      csubject:"",
      cdescription:"",
      clink:"",
      currNote:null,
      currIndex:-1,
    };
  }

  componentDidMount() {
    db.ref("notes").on("value", snapshot => {
      let allNotes = [];

      snapshot.forEach(snap => {
        const note=snap.val()
        allNotes.push(note);
      });
      // console.log(allNotes)
      this.setState({ notes: allNotes });
    });
  }
  
  updateNote(note,index)
  {
    this.setState({
      currNote:note,
      currIndex:index
    })
  }
  render(){
    const {notes}=this.state;
    console.log(notes)
    const {currNote,currIndex}=this.state
    
    return(     
      <div>   
       <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Notes App</NavbarBrand>
        <Nav className="mr-auto" navbar>

        <NavItem>
              <NavLink href="/createnotes/">Create Notes</NavLink>
        </NavItem>

        <NavItem>
              <NavLink href="/signin/">Logout</NavLink>
        </NavItem>
        </Nav>
      </Navbar>
    </div>
        <div>
          {notes.map((note,index) => {
            return (
              <div key={index}>
                <div className="card mb-3 mt-3 shadow-box-example hoverable background">
                <div className="card-body">
                <h3>{note.name}</h3>
                  <p>Subject: {note.subject}</p>
                  <p>{note.description}</p>
                  <a href={note.link} className="card-link btn btn-primary">View</a>
                  <Button onClick={()=>deletePost(note)} className="btn btn-danger ml-3">Delete</Button>
                  <Button onClick={()=>{
                    this.updateNote(note,index)}} className="ml-3">Edit</Button>
                </div> 
                <div>
                { currNote ?
                (
                 <EditNotes currNote={currNote}></EditNotes>
                )
                : null
                }
        </div>
              </div>
               
              </div>

            );
          })}
        </div>
        {/* <div>
                { currNote ?
                (
                 <EditNotes currNote={currNote}></EditNotes>
                )
                : null
                }
        </div> */}
      </div>
    );  
  } 
}

export default HomePage;