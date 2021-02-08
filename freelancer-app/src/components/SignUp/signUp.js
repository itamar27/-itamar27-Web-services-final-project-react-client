import axios from 'axios';
import { URL } from '../../constants';
import { useHistory } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';

import PersonalDetails from './personalDetails';
import CustomerDetailsInputs from './customerDetailsInputs';
import FreelancerDetailsInputs from './freelancerDetailsInputs';

import { UserContext } from '../../userContext';



const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        marginTop: theme.spacing(14),
        marginBottom: theme.spacing(10),
        width: '40vw',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        marginTop: theme.spacing(3),
        height: '100%',
        width: '100%',
    },
    submit: {
        height: '5vh',
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#609EFA',
        "&:hover": {
            backgroundColor: '#3986f9',
        },
    },
    divider: {
        marginTop: theme.spacing(3),
    },
    buttonsContainer: {
        flexGrow: 3,
        marginTop: theme.spacing(2),
        textalign: 'cetner',
    },
    buttonElement: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function SignUp(match) {
    const classes = useStyles();

    const history = useHistory();
    const { setUser } = useContext(UserContext);

    const { id, first_name, last_name, email } = useLocation().state || {};

    const [clicked, setCLicked] = useState(0);
    const [inputs, setInputs] = useState({
        firstName: first_name,
        lastName: last_name,
        email: email,
        facebook: "",
        instgram: "",
        linkedin: "",
    })

    const [customer, setCustomer] = useState("");
    const [freelancer, setFreelancer] = useState({
        description: "",
        workExperience: "",
        programming: "",
        workField: ""
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
        let filled = false;
        let pack = inputs;

        if (customer !== "") {
            pack.freelancer_api_name = customer;
            filled = true;
        }
        if (freelancer.programming !== "") {
            pack['freelancer'] = freelancer
            filled = true;
        }
        if (filled) {
            console.log(pack);

            axios.post(URL + `auth/signup`, pack)
                .then(response => {
                    setUser(response.data);
                    history.push({
                        pathname: `/user/${response.data.first_name}_${response.data.last_name}`,
                    })
                })
                .catch(err => {
                    console.log(err);
                    setUser(null);
                });

        }
        else
            console.log(`please fill up the entire form`);
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
        <Container component="main" className={classes.main}>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Join our community!
                 </Typography>
                <form className={classes.formControl} onSubmit={onSubmit}>
                    <FormControl className={classes.form}>

                        <PersonalDetails
                            handleChange={handleChange}
                            values={inputs}
                        />
                        <Grid container spacing={2} className={classes.buttonsContainer}>
                            <Grid item style={{ textAlign: 'center' }} xs={6}>
                                <Button
                                    className={classes.buttonsContainer}
                                    variant='outlined'
                                    color='primary'
                                    onClick={e => { e.preventDefault(); setCLicked(Math.abs(1 - clicked)) }}
                                >
                                    I'm a customer
                                </Button>
                            </Grid>
                            <Grid item style={{ textAlign: 'center' }} xs={6}>
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