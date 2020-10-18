//this is going to store Firebase realtime database API code
import { db } from "./firebase";

//##########3 user API

//create an user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  });

export const doCreateTask = (id, name, subject, description, author, link) =>
    db.ref(`notes/${id}`).set({
        name,
        subject,
        description,
        author,
        link
    });

// Return One tasks.
export const doGetAnTask = tid => db.ref(`notes/${tid}`).once("value")

// Return All tasks.
export const doGetTasks = () => db.ref("notes").once("value")

//returns all users from firebase realtime db
export const onceGetUsers = () => db.ref("users").once("value");

export const doGetAnUnser = uid => db.ref(`users/${uid}`).once("value");

// other APIs could come below

