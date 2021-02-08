import { makeStyles } from '@material-ui/core/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#8CD1F6",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "2vh",
    width: "100vw"
  }
}));


const Footer = () => {
  const classes = useStyles();
  return (

    <div className={classes.footer}>
    </div>
  );
}

export default Footer;