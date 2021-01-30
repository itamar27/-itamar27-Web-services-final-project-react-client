import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        width: '40vw',
        maxHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        height: '50vh',
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        height: '5vh',
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#609EFA',
    },
    divider : {
        marginTop: theme.spacing(3),
    }
}));


export default function SignUp() {
    const classes = useStyles();


    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [streetNumber, setStreetNumber] = useState("")


    const onSubmit = (event) => {
        event.preventDefault();

        console.log(firstName, lastName, city, street, streetNumber)
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign up
                 </Typography>
                <form className={classes.form} noValidate>
                    <FormControl>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={e => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="city"
                                    label="City"
                                    name="city"
                                    autoComplete="lname"
                                    onChange={e => setCity(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="street"
                                    label="Street"
                                    name="street"
                                    onChange={e => setStreet(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="streetNumber"
                                    label="street number"
                                    name="streetNumber"
                                    onChange={e => setStreetNumber(e.target.value)}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={e => setInputs({ email: e.target.value })}
                                />
                            </Grid> */}
                        </Grid>
                        <Divider variant="full width" className={classes.divider}/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onSubmit}
                        >
                            Sign Up
                        </Button>
                    </FormControl>
                </form>
            </div>
        </Container>
    );
}