import React from "react";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";

function Information() {
  return (
      
    <React.Fragment>
        
        <Navbar></Navbar>
        
      <div style={bg}>
         
      </div>
      <Sidenav ></Sidenav>
      
      
      
     
    </React.Fragment>
 
  );
}
const bg = {
  backgroundColor: "#6b9c9b",
  height: "80vh",
  marginLeft: "360px",
  border: "1px solid black",
};

export default Information;
