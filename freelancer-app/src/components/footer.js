import React from "react";

const footerStyle = {
  backgroundColor: "#BED6FA",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "100%"
};


const Footer = ({ children })  => {
  return (

    <div style={footerStyle}>{children}</div>
  );
}

export default Footer;