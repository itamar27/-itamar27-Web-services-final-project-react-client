// import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    navStyles: {
        backgroundColor: "#609EFA",
        text: 'bold',
    },
    linkStyle : {
    },
}));

const Navbar = (props) => {

    const classes = useStyles();

    return (
        <AppBar className={classes.navStyles}>
            <ToolBar >
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                    <Tab href = '/' label="WorkFlows" />
            </ToolBar>
        </AppBar>

    )
}


export default Navbar;