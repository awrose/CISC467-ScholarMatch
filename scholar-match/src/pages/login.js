import React, { useState }  from 'react';
import { Button, Form } from "react-bootstrap";
import student from "../images/loginStudent.jpg";
import googleSignIn from "../images/google.png";
import logo from "../images/logo.png"
import "../styling_sheets/loginPage.css"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

let inventoryData = [{username:"eric", password:"123"}]
const saveDataKey = "MY-PAGE-USRAS-1";

let isUSignedIn = false;
const userInKey = "MY-PAGE-IF-IN";

// Check if the user's data already exists
const previousData = localStorage.getItem(saveDataKey);
// If the data doesn't exist, `getItem` returns null
if (previousData !== null) {
  inventoryData = JSON.parse(previousData);
}

const Login = () => {
  const setPath = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = () => {
  // Finds admin with the matching username and password
  const admin = inventoryData.find(
      (admin) =>
          admin.username === username && admin.password === password
  );

  if (admin) {
      // If user is found in json file send them to inventory page
      setPath("/");
  } else {
      // If user is not found, display an error message
      alert("Invalid username or password");
  }
};
const handleMakeAccount = () => {
  setPath("/makeAccount")
}

  return (
    <div className='x'>
      <div className='area'>
      <img src={student} className="image1" alt='' />

      <div className='signinarea'>
            <div className='usersigninformarea'>
            <img src={logo} className="logoimg" alt='' />
            <h2 class='tellSignIn'>Sign in:</h2>
            <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className="forms"
                            type="text"
                            placeholder="Email or Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>


        <div className='signInAuth'>
        <Button className="button" onClick={handleLogin}>
          
                            LOGIN NOW on
                        </Button>
        </div>

        <div className='forgotPassword'>
        <a href="https://www.google.com/">Forgot password?</a>
        </div>
        <h2>{username}</h2>
        <div className='m'>
          <Button className='makeAccountButton' onClick={handleMakeAccount}>Make Account</Button>
        </div>

        </div>

      </div>
      </div>
    </div>
  );
};
  
export default Login;