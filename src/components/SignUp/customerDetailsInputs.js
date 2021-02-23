import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    
    gridBox  : {
        marginTop : theme.spacing(2),
    }
}));


export default function CustomerDetailsInputs(props) {

    const classes = useStyles();

    return (

        <Grid container spacing={3} className = {classes.gridBox}>
            <Grid item xs = {6} >
                <Typography variant="h6" component="h2" gutterBottom>
                    Please enter your user name on freelancer.com
                </Typography>
            </Grid>
            <Grid item xs = {6}>
                <TextField
                    name="customerUser"
                    variant="outlined"
                    required
                    fullWidth
                    id="freelancerUser"
                    label="user name"
                    autoFocus
                    defaultValue = {props.value}
                    onChange={props.handleChange('customer')}
                />
            </Grid>
        </Grid>

    )
};