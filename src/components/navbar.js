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
        backgroundColor: '#B3E3F8',
        height: '100%',


    },
    container: {
        display: 'flex',
        height: '100%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: '600',
        fontSize: '3vh',
    },
    icon: {
        color: 'grey',
        textDecoration: 'none'
    }
}));

const NavBar = (props) => {
    const classes = useStyles();
    const { user, logout } = useContext(UserContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className={ classes.root }>
            <Toolbar style={ { height: "100%" } }>

                <Typography variant="h6" className={ classes.title }>

                    <Link to='/' className={ classes.icon } style={ { fontWeight: '500' } }>Workflows</Link>
                </Typography>
                { user?.role && (
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={ handleMenu }
                            color="inherit"
                        >
                            <AccountCircle className={ classes.icon } />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={ anchorEl }
                            anchorOrigin={ {
                                vertical: 'top',
                                horizontal: 'right',
                            } }
                            keepMounted
                            transformOrigin={ {
                                vertical: 'top',
                                horizontal: 'right',
                            } }
                            open={ open }
                            onClose={ handleClose }
                        >
                            <MenuItem onClick={ handleClose }><Link to={ `/user/${user.first_name}_${user.last_name}` } className={ classes.icon }>My account</Link></MenuItem>
                            <MenuItem onClick={ handleClose }><Link to='/' onClick={ e => logout(e) }>Logout</Link></MenuItem>
                        </Menu>
                    </div>
                ) }
            </Toolbar>
        </AppBar>
    );
};
export default NavBar;