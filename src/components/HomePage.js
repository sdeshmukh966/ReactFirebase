// Home page.
import React, { Component } from "react";
import { db } from "../firebase/firebase";


const NoteBlock=({note})=>{
  return(
    <div>
      <h3>{note.name}</h3>
        <p>Subject: {note.subject}</p>
        <p>{note.description}</p>
        <p>Link: <a href={note.link}> {note.link}</a></p>
    </div>
  );
}
class HomePage extends Component{
  constructor(props){
    super(props)
    this.state = {
      notes: []
    }
    
  }

  componentDidMount() {
    db.ref("notes").on("value", snapshot => {
      let allNotes = [];
      snapshot.forEach(snap => {
        allNotes.push(snap.val());
      });
      // console.log(allNotes)
      this.setState({ notes: allNotes });
    });
  }
 
  render(){
    const {notes}=this.state;
    console.log(notes)
    return(        
    <div>
    <h1>Home Page</h1>

    <p>Notes are very helpful!! Get it here</p>

    {this.state.notes.map(note => {
      return (
        <div key={note.name}>
          <NoteBlock note={note}></NoteBlock>
        </div>
      );
    })}
  </div>

    );  
  } 
}

export default HomePage;