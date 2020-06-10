import React, { Component } from "react";
import { Link } from "react-router-dom";
function Sidenav() {
  return (
    <React.Fragment>
      <div class="sidenav">
        <Link to="/home">
        <a href="#hone">Home</a>
        </Link>
       
        <Link to="/blank">
        <a href="#session">Session</a>
        </Link>
        <Link to="/downloads">
        <a href="#Downloads">Downloads</a>
        </Link>
       <Link><a href="#contact">About</a></Link>
       <Link><a href="#clients">Contact</a></Link>
        
        
      </div>
    </React.Fragment>
  );
}
export default Sidenav;
