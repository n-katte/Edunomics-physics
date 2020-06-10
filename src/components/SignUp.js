import React from "react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <React.Fragment>
      <div style={containerStyle} className="container">
        <img style={imgStyle} src={require("../assests/signup.jpg")}></img>
      </div>
      <form style={sStyle} className="sForm">
          <h1  style ={{ marginLeft: "60px"}}>Sign UP</h1>
        <p style={ pStyle }>Name</p>
        <input style={iStyle} type ="text"></input>
        <p style={ pStyle }>Email Id</p>
        <input style={iStyle} type ="text"></input>
        <p style={ pStyle }>Password</p>
        <input style={iStyle} type ="text"></input>
        <p style={ pStyle }>Contact</p>
        <input style={iStyle}  type ="text"></input>
        <Link to ="/">
        <button style = {btn}> SignUp</button>
        </Link>
        
      </form>
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
    width: "100%",
  fontSize: "20px",
  padding: "5px",
  marginTop: "5px",

}
const imgStyle = {
  height: "80vh",
  marginTop: "100px",
  marginRight: "200px",
};

const sStyle = {
    padding: "20px",
    position: "absolute",
    top: "30vh",
    width: "20vw",
    left: "60vw",
    height: "60vh",
    backgroundColor: "lightblue",
};

const containerStyle = {
  position: "relative",
  textAlign: "center",
};

const pStyle = {
  width: "100%",
  lineHeight : "2rem",
  marginLeft: "20px",
  marginTop: "4px"

};

export default SignUp