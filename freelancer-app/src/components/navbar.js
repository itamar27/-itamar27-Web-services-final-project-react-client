import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { UserContext } from '.././userContext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#B3E3F8',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    icon: {
        color: 'grey',
        textDecoration: 'none'
    }
}));

const NavBar = (props) => {
    const classes = useStyles();
    const { user, setUser } = useContext(UserContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={ classes.root }>
            <AppBar position="static" className={ classes.root }>
                <Toolbar>

                    <Typography variant="h6" className={ classes.title }>

                        <Link to='/' className={ classes.icon }>Workflows</Link>
                    </Typography>
                    {/* {user && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle className={classes.icon} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}><Link to={`/user/${user.first_name}`} className={classes.icon}>My account</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to='/' >Logout</Link></MenuItem>
                            </Menu>
                        </div>
                    )} */}
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default NavBar;