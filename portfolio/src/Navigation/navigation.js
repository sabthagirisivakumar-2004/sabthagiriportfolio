import React from "react";
import "./navigation.css";
const Navigation = () => {
  return (
    <>
      <div>
        <h1 className="logo">SABS</h1>
      </div>
      <center>
        <nav className="centerpart">
          <a href="#" className="nav1">
            <b>ABOUT</b>
          </a>
          <a href="#" className="nav2">
            <b>PROJECTS</b>
          </a>
          <a href="#" className="nav3">
            <b>SERVICE</b>
          </a>
          <a href="#" className="nav4">
            <b>TOOLS</b>
          </a>
          <a href="#" className="nav5">
            <b>CONTACT</b>
          </a>
        </nav>
      </center>
      <button className="Glowsticky">Download CV</button>
    </>
  );
};

export default Navigation;
