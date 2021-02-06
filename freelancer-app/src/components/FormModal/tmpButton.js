import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Popup from './popup';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        width: '100%',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        height: '50vh',
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        height: '5vh',
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#609EFA',
    },
    google: {
        height: '7vh',
        width: '100%',
    },
}));




export default function Click() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    return (

        <Container component='main' maxWidth='xs'>
            <div className={classes.paper}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick = {() => setIsOpen(true)}
                >
                    Click me!
                </Button>
                <Popup

                    openPopup = {isOpen}
                    setOpenPopup = {setIsOpen}
                    title = 'Create a map!'
                    
                >

                </Popup>
            </div>
        </Container>
    );
}
