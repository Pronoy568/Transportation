import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const  handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
          const {displayName , email} = result.user;
          const signedInUser = {name : displayName, email}
          setLoggedInUser(signedInUser);
          history.replace(from);
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
        });
    }
    const  handleFbSignIn = () => {
        firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    const {displayName , email} = result.user;
    const signedInUser = {name : displayName, email}
    console.log(signedInUser);
    setLoggedInUser(signedInUser);
    history.replace(from);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
  });
    }

    return (
        <div  className="button">
            <Button onClick={ handleGoogleSignIn} variant="primary">Google Sign in</Button>
            <br/>
            <br/>
            <Button onClick={ handleFbSignIn} variant="primary">FaceBook Sign in</Button>
        </div>
    );
};

export default Login;