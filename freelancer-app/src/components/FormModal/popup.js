import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MapForm from './MapForm';



const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        top: theme.spacing(1),
    }

}))

export default function Popup(props) {

    const classes = useStyles()
    const { title, childern, openPopup, setOpenPopup } = props;

    return (

        <Dialog component = 'div' open={openPopup} maxWidth="sm" fullWidth = {true} classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle>
                <div styles = {{display : 'flex', flexDirection:'row' }}>
                    <Typography variant='h6' component = 'div'>
                    {title}
                    </Typography>
                  
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <MapForm />
            </DialogContent>

        </Dialog>
    )
}
