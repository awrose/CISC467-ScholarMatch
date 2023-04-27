import React from 'react';
import { Button } from "react-bootstrap";
import student from "../images/loginStudent.jpg";
import googleSignIn from "../images/google.png";
import logo from "../images/logo.png"
import "../styling_sheets/loginPage.css"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyD8c7x-yqw10THw01ilxLwhvQLFyacGOtg",
    authDomain: "scholarmatch-e5043.firebaseapp.com",
    projectId: "scholarmatch-e5043",
    storageBucket: "scholarmatch-e5043.appspot.com",
    messagingSenderId: "785111082002",
    appId: "1:785111082002:web:ee9263f0e14b3c2399a4cb",
    measurementId: "G-WVFDR8SMFT"
});
const authenticate = firebase.auth();
const authenticationService = new firebase.auth.GoogleAuthProvider();

const signInBox = () => {
    authenticate.signInWithPopup(authenticationService);
};
  return (
    <div className='x'>
      <div className='area'>
      <img src={student} className="image1" />

      <div className='signinarea'>
            <div className='usersigninformarea'>
            <img src={logo} className="logoimg" />
            <h2 class='tellSignIn'>Sign in:</h2>
            <div class="form-group">
                    <h3 for="exampleInputEmail1">Email address</h3>
                    <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            
            <div class="form-group">
              <h3 for="exampleInputPassword1">Password</h3>
              <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <div className='signInAuth'>
        <button type="submit" class="loginclick" onClick={signInBox}>Sign in with google</button>
        </div>

        <div className='forgotPassword'>
        <a href="https://www.google.com/">Forgot password?</a>
        </div>
        <div className='contGoogle'>
        <img src={googleSignIn} className="google" />
        </div>
        </div>

        <div className='makeAccount'>
          <Button className='makeAccountButton'>Make Account</Button>
        </div>

        <div className='continueGuest'>
          <Button className='guestButton'>Continue as guest</Button>
        </div>

      </div>
      </div>
    </div>
  );
};
  
export default Login;