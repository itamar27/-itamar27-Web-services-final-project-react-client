import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        width: '30vw',
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
    divider: {
        marginTop: theme.spacing(2),
    },
}));

export default function PersonalDetails(props) {

    const classes = useStyles();

    const { firstName, lastName, appt } = props.values;

    return (
        <>
            <Grid container spacing={ 1 }>
                <Grid item xs={ 12 } sm={ 6 }>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={ props.handleChange('firstName') }
                        defaultValue={ firstName }
                    />
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        onChange={ props.handleChange('lastName') }
                        defaultValue={ lastName }
                    />
                </Grid>
                <Grid item xs={ 12 } sm={ 4 }>
                    <TextField
                        variant="outlined"
                        fullWidth
                        id="facebook"
                        label="facebook"
                        name="facebook"
                        onChange={ props.handleChange('facebook') }
                        defaultValue={ appt }
                    />
                </Grid>
                <Grid item xs={ 12 } sm={ 4 }>
                    <TextField
                        variant="outlined"
                        fullWidth
                        id="instgram"
                        label="instgram"
                        name="instgram"
                        onChange={ props.handleChange('instgram') }
                        defaultValue={ appt }
                    />
                </Grid>
                <Grid item xs={ 12 } sm={ 4 }>
                    <TextField
                        variant="outlined"
                        fullWidth
                        id="linkedin"
                        label="linkedin"
                        name="linkedin"
                        onChange={ props.handleChange('linkedin') }
                        defaultValue={ appt }
                    />
                </Grid>
            </Grid>
            <Divider variant="fullWidth" className={ classes.divider } />
        </>
    )
}