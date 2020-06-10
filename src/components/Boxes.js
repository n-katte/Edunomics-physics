import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';
 function Boxes() {
    return (
        <React.Fragment>
                <div style={bg}>
        <div class="rows first">
        <div class="session">
        <img style={{height : "80px", width : "80px"}}  src={require("../assests/session.jpg")}></img>
            <Link to="/blank">Session</Link>
            
           
          </div>
          <div class="practice">
          <img style={{height : "80px", width:"80px"}}  src={require("../assests/quest.jpg")}></img>
            <a>practice</a>
            
          </div>
        </div>
        <div class="rows first">
        <div class="downloads">
        <img style={{height : "50px" ,width: "50px"}}  src={require("../assests/download.jpg")}></img>
            <Link to="/downloads"><a>Downloads</a></Link>
           
           
          </div>
          <div class="ask">
          <img style={{height : "80px",width: "80px"}}  src={require("../assests/pad.jpg")}></img> 
          <a>Ask</a>
           
          </div>
        </div>
        
      </div>
     
      
        </React.Fragment>
    )
}

const bg = {
    backgroundColor: "#6b9c9b",
    height: "80vh",
    marginLeft: "360px",
    border: "1px solid black",
  };
export default Boxes