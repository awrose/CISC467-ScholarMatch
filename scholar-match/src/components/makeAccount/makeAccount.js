import React, { useState, useEffect }  from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import student from "../images/loginStudent.jpg";
// import googleSignIn from "../images/google.png";
// import logo from "../images/logo.png"
// import "../styling_sheets/loginPage.css"
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/messaging";
// import "firebase/compat/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";




let inventoryData = [{username:"eric", password:"123"}]

const saveDataKey = "MY-PAGE-USRAS-1";
const loadData = localStorage.getItem(saveDataKey);
if (loadData !== null) {
    inventoryData = JSON.parse(loadData);
}

const MakeAccount = () => {
const setPath = useNavigate();
const [data, setData] = useState(inventoryData);
const [user, setUser] = useState("");
const [password, setPassword] = useState("");


function updateInventory() {
    setData([
        ...data,
        {
            username: user,
            password: password,
        }
    ]);
    console.log(data);
    setPath("/login")
}

useEffect(() => {
    localStorage.setItem(saveDataKey, JSON.stringify(data))
  }, [data])
    return(
        <div>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className="forms"
                            type="text"
                            placeholder="Email or Username"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button onClick={updateInventory}>Submit</Button>
        </div>

    )
}

export default MakeAccount;