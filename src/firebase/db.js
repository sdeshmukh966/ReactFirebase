//this is going to store Firebase realtime database API code
import { db } from "./firebase";

//##########3 user API

//create an user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  });

export const doCreateNotes = (name, subject, description, author, link) =>
    db.ref(`notes/${name}`).set({
        name,
        subject,
        description,
        author,
        link
    });

// Return One tasks.
export const doGetNotesByName = name => db.ref(`notes/${name}`).once("value")

// Return All tasks.
export const doGetTasks = () => db.ref("notes").on("value", snapshot => {
  // console.log("FireB ",snapshot)
  let data = snapshot.value();
  const todoItems = {...data};
  return todoItems;
  });

//returns all users from firebase realtime db
export const onceGetUsers = () => db.ref("users").once("value");

export const doGetAnUnser = uid => db.ref(`users/${uid}`).once("value");

// other APIs could come below

