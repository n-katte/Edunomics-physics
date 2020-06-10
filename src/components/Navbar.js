import React, { Component } from "react";
import Sidenav from "./Sidenav";
import Information from "./Information"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <React.Fragment>
      <ul class="main-navigation">
        <p > Welcome to Edunomics</p>
        <li>
          <a href="#"> My Account</a>
          <ul>
            <li>
              <a href="#">My profile</a>
            </li>
            <li>
              <Link to ="/">Logout</Link>
             
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Select Class</a>
          <ul>
            <li>
              <a href="#">11th Class</a>
              <ul>
                <li>
                  <a href="#">physics</a>
                  <ul>
                    <li>
                      <a href="#"> Electrical chnages and fields </a>
                    </li>
                    <li>
                      <a href="#"> Electrical Potential </a>
                    </li>
                    <li>
                      <a href="#"> Current Electricity </a>
                    </li>
                    <li>
                      <a href="#"> Magnetisum </a>
                    </li>
                    <li>
                      <a href="#"> Alternating current </a>
                    </li>
                    <li>
                      <a href="#"> Ray optics </a>
                    </li>
                    <li>
                      <a href="#"> Electrical chnages and fields </a>
                    </li>
                    <li>
                      <a href="#"> Electrical chnages and fields </a>
                    </li>
                    <li>
                      <a href="#"> Electrical chnages and fields </a>
                    </li>
                    <li>
                      <a href="#"> Electrical chnages and fields </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">mathematics</a>
                  <ul>
                    <li>
                      <a href="#">Ration and function </a>
                    </li>
                    <li>
                      <a href="#">Inverse trignometry </a>
                    </li>
                    <li>
                      <a href="#">Matrices </a>
                    </li>
                    <li>
                      <a href="#">continuty and diffrentiationn </a>
                    </li>
                    <li>
                      <a href="#">Application of derivative </a>
                    </li>
                    <li>
                      <a href="#">integrals </a>
                    </li>
                    <li>
                      <a href="#">Probabilty </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">12th class</a>
              <ul>
                <li>
                  <a href="#">physics</a>
                  <ul>
                    <li>
                      <a href="#"> Electrical chnages and fields </a>
                    </li>
                    <li>
                      <a href="#"> Electrical Potential </a>
                    </li>
                    <li>
                      <a href="#"> Current Electricity </a>
                    </li>
                    <li>
                      <a href="#"> Magnetisum </a>
                    </li>
                    <li>
                      <a href="#"> Alternating current </a>
                    </li>
                    <li>
                      <a href="#"> Ray optics </a>
                    </li>
                    <li>
                      <a href="#"> Electrical chnages and fields </a>
                    </li>
                    <li>
                      <a href="#"> Electrical chnages and fields </a>
                    </li>
                    <li>
                      <a href="#"> Electrical chnages and fields </a>
                    </li>
                    <li>
                      <a href="#"> Electrical chnages and fields </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">mathematics</a>
                  <ul>
                    <li>
                      <a href="#">Ration and function </a>
                    </li>
                    <li>
                      <a href="#">Inverse trignometry </a>
                    </li>
                    <li>
                      <a href="#">Matrices </a>
                    </li>
                    <li>
                      <a href="#">continuty and diffrentiationn </a>
                    </li>
                    <li>
                      <a href="#">Application of derivative </a>
                    </li>
                    <li>
                      <a href="#">integrals </a>
                    </li>
                    <li>
                      <a href="#">Probabilty </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      
      </ul>
  
 
    
    </React.Fragment>
  );
}

export default Navbar;
