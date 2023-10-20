import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import "./navbar.css";
import Home from "../../pages/index.js";
import Login from "../../pages/login";
import SavedScholarships from "../../pages/savedscholarships";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <h1>Scholar Match</h1>
        <NavMenu>
          <NavLink to="/" activeStyle exact component={Home}>
            Home
          </NavLink>
          <NavLink to="/login" activeStyle exact component={Login}>
            Log in/Sign up
          </NavLink>
          <NavLink to="/savedscholarships" activeStyle exact component={SavedScholarships}>
            Saved Scholarships
          </NavLink> 
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;