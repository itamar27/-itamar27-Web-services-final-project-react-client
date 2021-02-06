// import { makeStyles } from '@material-ui/core/styles';
// import React from "react";
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';
// import Drawer from 'rc-drawer';


// const useStyles = makeStyles({

// });


// export default function Job(props) {
//     const classes = useStyles();
//     return (

//     )
// }

import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Job from '../jobs/job'


const drawerWidth = '30vw';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        position: 'absolute',
        top: 100,
        right: 100
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
        justifyContent: 'flex-end',
    },

}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={ classes.root }>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={ handleDrawerOpen }
                edge="start"
                className={ clsx(classes.menuButton, open && classes.hide) }
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                className={ classes.drawer }
                variant="persistent"
                anchor="left"
                open={ open }
                classes={ {
                    paper: classes.drawerPaper,
                } }>
                <div className={ classes.drawerHeader }>
                    <IconButton onClick={ handleDrawerClose }>
                        { theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
                    </IconButton>
                </div>
                <Job />

            </Drawer>
        </div>
    );
}