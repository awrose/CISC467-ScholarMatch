import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import "./navbar.css";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <h1>Scholar Match</h1>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/login" activeStyle>
            Log in/Sign up
          </NavLink>
          <NavLink to="/savedscholarships" activeStyle>
            Saved Scholarships
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;