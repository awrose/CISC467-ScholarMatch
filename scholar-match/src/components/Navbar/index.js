import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Login
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