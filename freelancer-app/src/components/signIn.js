import React from 'react';

//Design components - material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GoogleLogin from 'react-google-login';

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


const responseGoogle = () => {
  console.log('Google connect!');
}

export default function SignIn() {
  const classes = useStyles();

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <GoogleLogin
            className={classes.google}
            clientId="862545460693-9fe0uqlq4u6pug9ineb575slh98uhare.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}