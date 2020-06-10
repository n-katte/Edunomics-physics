import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';
 function Boxes() {
    return (
        <React.Fragment>
                <div style={bg}>
        <div class="rows first">
        <div class="session">
            <Link to="/blank">session</Link>
            
           
          </div>
          <div class="practice">
            <a>practice</a>
            
          </div>
        </div>
        <div class="rows first">
        <div class="downloads">
            <Link to="/downloads"> <a>downloads</a></Link>
           
           
          </div>
          <div class="ask">
            <a>ask</a>
           
          </div>
        </div>
        
      </div>
     
      
        </React.Fragment>
    )
}

const bg = {
    backgroundColor: "#6b9c9b",
    height: "60vh",
    marginLeft: "360px",
    border: "1px solid black",
  };
export default Boxes