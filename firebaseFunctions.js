//import { fireAuth } from "./firebase";
//import axios from "axios";

/*
    FOR SIGNING UP NEW USERS 
const signUp = (e) => {
  console.log("Hey");
  fireAuth
    .createUserWithEmailAndPassword("testing123@gmail.com", "password") // TODO: Replace "testing123@gmail.com" with actual email and "password" with actual password
    .then((auth) => {
      if (auth) {
          auth.user.updateProfile({
            displayName: name   // TODO: Replace with actual name they input
  })
      }
    })
    .catch((err) => setErrorMessage(err.message));
  // firebase sign up here
};
*/

/*
    FOR LOGGING IN CREATED USERS 

const logIn = (e) => {
    e.preventDefault();
    fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
            // there is a user so navigate to home screen
        }
      })
      .catch((err) => setErrorMessage(err.message)); // an error messsage that displays underneath
    // firebase log in here
  };
*/

//  FOR GETTING SIGNED IN USER (IF NOT SIGNED IN, IT WILL BE NULL)
// import { fireAuth, fireDb } from "./firebase";
/*
export async function returnCurrentUser() {
    return await fireAuth.currentUser;
}
*/

/*
export function updatePassword() {
  let user = returnCurrentUser(); // gets current user
  user
    .updatePassword(newPassword)
    .then(function () {
      // Update successful.
    })
    .catch(function (error) {
      // An error happened.
    });
}
*/
