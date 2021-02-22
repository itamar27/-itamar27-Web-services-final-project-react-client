import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MapForm from './MapForm';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Fab from '@material-ui/core/Fab'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        top: theme.spacing(1),
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center'
    },


}))

export default function Popup(props) {

    const classes = useStyles()


    return (

        <Dialog component='div' open={props.openPopup} maxWidth="sm" fullWidth={true} classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle>
                <div className={classes.wrapper}>
                    <Typography component='div' style={{ verticalAlign: 'center', fontWeight: '500', fontSize:'3vh' }}>
                        {props.title}
                    </Typography>
                    <Fab size='small' className={classes.button} onClick={() => props.setClosePopup(false)}>
                        <CloseOutlinedIcon style={{ fontSize: '2vh' }} />
                    </Fab>
                </div>

            </DialogTitle>
            <SimpleBar style={{ maxHeight: '73vh', paddingRight: 15 }}>
                <DialogContent >
                    <MapForm
                        description = {props.description}
                        price = {props.price}
                        customerId = {props.customerId}
                        projectId = {props.projectId}
                        user = {props.user}
                    />
                </DialogContent>
            </SimpleBar>

        </Dialog>
    )
}
