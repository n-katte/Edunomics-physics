import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <div className="container" style={ContainerStyle}>
        <h2>EDUNOMICS</h2>
        <p>contact@edunomics.in</p>
        <p>
          JOIN US{" | "} COOKIE POLICY{" | "} TERM OF USE{" | "} TECH{" | "}{" "}
          PRIVACY POLICY
        </p>
      </div>
    </React.Fragment>
  );
}
const ContainerStyle = {
    paddingTop:"50px",
  height: "35vh",
  backgroundColor: "#3f3f3f",
  marginTop: "50px",
  textAlign: "center",
  lineHeight : "3rem",
  letterSpacing : "2px",
  color : "white"
};
export default Footer;
