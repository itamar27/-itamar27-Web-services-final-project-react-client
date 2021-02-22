
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EditGoal from './editGoal'
import Chat from './chat/chat'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


const drawerWidth = '25vw';

const useStyles = makeStyles({

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
    },
});

export default function TemporaryDrawer(props) {
    const classes = useStyles();

    // console.log(props.data);
    return (
        <div>
            <Drawer anchor={ 'right' } open={ props.open } className={ classes.drawer } classes={ { paper: classes.drawerPaper } }>
                <div className={ classes.drawerHeader }>
                    <IconButton onClick={ props.close }>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <EditGoal goal={ props.data } submit={ props.submit } delete={ props.delete } />
                <Chat comments={ props.data.comments } send={ props.send } />
            </Drawer>
        </div>
    );
}

