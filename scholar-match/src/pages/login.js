import React from 'react';
import { Button } from "react-bootstrap";
import student from "../student1.jpg";
import googleSignIn from "../google.png";
import logo from "../logo.png"
import "./login.css"

  
const Login = () => {
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
        <button type="submit" class="loginclick">Submit</button>
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