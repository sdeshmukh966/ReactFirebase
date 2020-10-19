import React, { Component } from "react";
import { Button,Form, FormGroup,Label ,Input } from "reactstrap";
import { db } from "../firebase/firebase";

export default class EditNotes extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.updateNote = this.updateNote.bind(this);

        this.state={
            currNote:{
                name:"",
                subject:"",
                description:"",
                link:""
            }
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { currNote } = nextProps;
        if (prevState.currNote.key !== currNote.key) {
          return {
            currNote: currNote,
          };
        }

        return prevState.currNote;
    }
    componentDidMount() {
        this.setState({
            currNote: this.props.currNote,
        });
    }
    onChangeName(e){
        const name=e.target.value;
        this.setState(function(prevState){
            return{
                currNote:{
                    ...prevState.currNote,
                    name:name,
                },
            };
        });
    }


    onChangeSubject(e){
        const subject=e.target.value;
        this.setState(function(prevState){
            return{
                currNote:{
                    ...prevState.currNote,
                    subject:subject,
                },
            };
        });
    }

    onChangeDescription(e){
        const description=e.target.value;
        this.setState(function(prevState){
            return{
                currNote:{
                    ...prevState.currNote,
                    description:description,
                },
            };
        });
    }


    onChangeLink(e){
        const link=e.target.value;
        this.setState(function(prevState){
            return{
                currNote:{
                    ...prevState.currNote,
                    link:link,
                },
            };
        });
    }
    updateNote(){
        const {name,subject,description,link}=this.state
        const data = {
            name:name,
            subject:subject,
            description:description,
            link:link,
        }
        console.log("CurrNote data",data,this.props.currNote.name)
       db.ref(`notes`).child(this.props.currNote.name).update(data)

    }
    render(){
        const {currNote}=this.state;
        console.log("Print state",this.state)
        return(
            <div>
             {currNote ? (
                <div>
                    <h2>Edit Note</h2>
                    <div>
                    <Form >
                        <FormGroup>
                        <Label for="exampleEmail">Notes Name</Label>
                        <Input
                        type="text"
                        name="name"
                        id="exampleEmail"
                        value={currNote.name}
                        onChange={this.onChangeName}
                        disabled
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Notes Subject</Label>
                        <Input
                        type="text"
                        name="subject"
                        id="exampleSubject"
                        value={currNote.subject} 
                        onChange={this.onChangeSubject}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label>Notes Description</Label>
                        <Input
                        type="text"
                        name="description"
                        id="exampleDescription"
                        value={currNote.description}      
                        onChange={this.onChangeDescription}

                        />
                        </FormGroup>
                        <FormGroup>
                        <Label>Notes URL</Label>
                        <Input
                        type="url"
                        name="link"
                        id="exampleDescription"
                        value={currNote.link}
                        onChange={this.onChangeLink}
                        />
                        </FormGroup>


                        <div className="text-center">
                        <Button onClick={()=> this.updateNote()}>
                        Update Notes
                        </Button>
                        </div>
                    </Form>
                    </div>
                </div>
             ):null}  
           
            </div>
          
        )
    }
}




















// <div>
// <h3>Edit Form</h3>
// <Form >
// <FormGroup>
// <Label for="exampleEmail">Notes Name</Label>
// <Input
//  type="text"
//  name="name"
//  id="exampleEmail"
//  value={this.state.cname}
//  onChange={ event => this.setState({cname:event.target.value})}
// />
// </FormGroup>
// <FormGroup>
// <Label for="exampleEmail">Notes Subject</Label>
// <Input
//  type="text"
//  name="subject"
//  id="exampleSubject"
//  value={this.state.csubject} 
//  onChange={ event => this.setState({csubject:event.target.value})}

// />
// </FormGroup>
// <FormGroup>
// <Label>Notes Description</Label>
// <Input
//  type="text"
//  name="description"
//  id="exampleDescription"
//  value={this.state.cdescription}      
//  onChange={ event => this.setState({cdescription:event.target.value})}

// />
// </FormGroup>
// <FormGroup>
// <Label>Notes URL</Label>
// <Input
//  type="url"
//  name="link"
//  id="exampleDescription"
//  value={this.state.clink}
//  onChange={ event => this.setState({clink:event.target.value})}
// />
// </FormGroup>


// <div className="text-center">
// <Button onClick={this.updateNote(note)}>
// Update Notes
// </Button>
// </div>
// </Form>
// </div>