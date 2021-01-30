import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
// import Link from '@material-ui/core/Link';
// import Divider from '@material-ui/core/Divider';

import PersonalDetails from './personalDetails';
import CustomerDetailsInputs from './customerDetailsInputs';
import FreelancerDetailsInputs from './freelancerDetailsInputs';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(14),
        marginBottom: theme.spacing(10),
        width: '40vw',
        maxHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        height: '40vh',
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        height: '5vh',
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#609EFA',
    },
    divider: {
        marginTop: theme.spacing(3),
    },
    buttonsContainer: {
        flexGrow: 1,
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(3)
    },
    buttonElement: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function SignUp() {
    const classes = useStyles();


    const [clicked, setCLicked] = useState(0);
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        streetNumber: "",
        appt: "",
        phone: "",
        facebook: "",
        instgram: "",
        linkedin: "",
    })

    const [customer, setCustomer] = useState("");
    const [freelancer, setFreelancer] = useState({
             description: "",
             workExperience : "",
             programming: "",
             workField : "" 
    })


    const handleChange = input => event => {
        event.preventDefault();

        if (input === 'customer')
            setCustomer(event.target.value);
        else if (input === 'freelancer')
            setFreelancer({ ...freelancer, [input]: event.target.value });
        else
            setInputs({ ...inputs, [input]: event.target.value });
    }

    const onSubmit = event => {
        event.preventDefault();

        console.log('hello');
        let pack =  inputs;
        if(customer !== "" )
            pack = {...pack, customer : customer};
        if(freelancer.programming !== "")
            pack['freelancer'] = freelancer
        console.log(pack);
    }

    const renderUserInputs = choice => {

        switch (choice) {
            case 1:
                return <CustomerDetailsInputs handleChange={handleChange} value={customer} />
            case 2:
                return <FreelancerDetailsInputs handleChange={handleChange} freelancer={freelancer} />
            default:
                break;
        }
    }

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Join our community!
                 </Typography>
                <form className={classes.form} onSubmit={onSubmit}>
                    <FormControl>

                        <PersonalDetails
                            handleChange={handleChange}
                            values={inputs}
                        />
                        <Grid container spacing={3} className={classes.buttonsContainer}>
                            <Grid item xs={6}>
                                <Button
                                    className={classes.buttonsContainer}
                                    variant='outlined'
                                    color='primary'
                                    onClick={e => { e.preventDefault(); setCLicked(Math.abs(1 - clicked)) }}
                                >
                                    I'm a customer
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    className={classes.buttonsContainer}
                                    variant='outlined'
                                    color='secondary'
                                    onClick={e => { e.preventDefault(); setCLicked(Math.abs(2 - clicked)) }}
                                >
                                    I'm a freelancer
                                </Button>
                            </Grid>
                        </Grid>
                        {renderUserInputs(clicked)}
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