import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkStyle ={
  backgroundColor: "transparent",
  padding: "10px",
  margin: "5px"
};

const ActiveNavLinkStyle ={
  backgroundColor: "red"
};



function NavBar() {

  const links = ["Movies", "Directors", "Actors"];

  return <div className="navbar">
      <NavLink activeStyle={ActiveNavLinkStyle} style={NavLinkStyle} exact to="/">Home</NavLink>
      {links.map(link=><NavLink key={link} activeStyle={ActiveNavLinkStyle} style={NavLinkStyle} to={`/${link.toLowerCase()}`}>{link}</NavLink>)}
    </div>;
}

export default NavBar;
