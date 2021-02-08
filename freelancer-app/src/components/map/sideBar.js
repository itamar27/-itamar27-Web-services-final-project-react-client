import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EditGoal from './editGoal'

import Chat from './chat/chat'


const drawerWidth = '20vw';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    menuButton: {
        position: 'absolute',
        top: 100,
        right: 50
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,

    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '10vh'
    },

});

export default function SideBar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    };

    return (
        <div className={ classes.root }>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={ handleDrawerOpen }
                edge="end"
                className={ classes.menuButton }
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                className={ classes.drawer }
                variant="persistent"
                anchor="right"
                open={ open }
                classes={ {
                    paper: classes.drawerPaper,
                } }>
                <div className={ classes.drawerHeader }>
                    <IconButton onClick={ handleDrawerClose }>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <EditGoal />
                <Chat />

            </Drawer>
        </div>
    );
}