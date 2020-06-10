import React from "react";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
function toggleLogin() {
  let d = document.getElementById("loginId");
  if (d.style.display == "none") {
    d.style.display = "inline-block";
  } else {
    d.style.display = "none";
  }
}
function LandingBg() {
  return (
    <React.Fragment>
      <img style={ImgStyle} src={require("../assests/FRONT.jpeg")}></img>
      <p
        style={{
          position: "absolute",
          left: "30px",
          top: "30px",
          color: "white",
          letterSpacing:"2px"
        }}
      >
        Welcome to Edunomics{" "}
      </p>
      <div style={Content}>
        <h1>WHERE DO YOU WANT TO GO TODAY ?</h1>
        <p>Share your bucket list with Us</p>
      </div>

      <Link to="/signup" style={SignUpstyle}>
        SignUp
      </Link>
      <button onClick={toggleLogin} style={loginStyle} to="/">
        Login
      </button>
      <div id="loginId" style={fStyle} className="login">
        <h3>Login</h3>
        <p >Email/Phone Number</p>
        <input style={iStyle} type="email"></input>
        <p >Password</p>
        <input style={iStyle}type="text"></input>
        <Link to ="/platform">
        <button style = {btn}> Login</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
const btn ={
  backgroundColor: "transparent",
border: "1px solid white",
marginLeft: "90px",
marginTop: "15px",
fontSize: "20px",
padding: "5px",
borderRadius: "10px",
color : "white",
cursor : "pointer",
outLine:"none"
}
const iStyle={
  width: "90%",
fontSize: "20px",
padding: "5px",
marginTop: "5px",

}
const fStyle = {
  height: "40vh",
  position: "absolute",
  top: "100px",
  right: "100px",
  color: "white",
  display:"none",
  textAlign: "center",
  lineHeight:"35px",
  fontSize:"150%",
  backgroundColor:"#3f3f3f",
  

};
const loginStyle = {
  position: "absolute",
  top: "20px",
  left: "85vw",
  padding: "10px",
  textDecoration: "none",
  color: "#fff",
  outline: "none",
  fontWeight: "bold",
  fontSize: "1.5rem",
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
};
const SignUpstyle = {
    position: "absolute",
    top: "20px",
    left: "93vw",
    padding: "10px",
    borderRadius: "30%",
    textDecoration: "none",
    color: "#fff",
    border: "4px solid white",
    outline: "none",
};
const ImgStyle = {
  height: "80vh",
  width: "100%",
  position: "relative ",
};
const Content = {
  position: "absolute",
  top: "35vh",
  left: "35vw",
  color: "#fff",
  textAlign: "center",
};
export default LandingBg;
