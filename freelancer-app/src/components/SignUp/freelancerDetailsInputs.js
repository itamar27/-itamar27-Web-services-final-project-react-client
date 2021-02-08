import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'; 
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    
    gridBox  : {
        marginTop : theme.spacing(2),
    }
}));

export default function FreelancerDetailsInputs(props) {

    const classes = useStyles();

    return (

        <Grid container spacing={1} className = {classes.gridBox}>
            <Grid item xs={12}>
                <TextField
                    name="description"
                    variant="outlined"
                    required
                    multiline
                    fullWidth
                    id="freelaancer-description"
                    label="A short description on yourself"
                    autoFocus
                    onChange = {props.handleChange('cutomer')}
                    defaultValue = {props.freelancer.description}
                />
            </Grid>
            <Grid item xs = {12} >
                <Typography variant="h6" component="h2" >
                        Life skills:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="workExperience"
                    variant="outlined"
                    required
                    multiline
                    fullWidth
                    id="work-experience"
                    label="Employment History"
                    autoFocus
                    onChange = {props.handleChange('workExperience')}
                    defaultValue = {props.freelancer.workExperience}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="programming"
                    variant="outlined"
                    required
                    multiline
                    fullWidth
                    id="programming"
                    label="programming languages you master"
                    autoFocus
                    onChange = {props.handleChange('programming')}
                    defaultValue = {props.freelancer.programming}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="workFields"
                    variant="outlined"
                    required
                    multiline
                    fullWidth
                    id="workFields"
                    label="Your programming expertise"
                    autoFocus
                    onChange = {props.handleChange('workFields')}
                    defaultValue = {props.freelancer.workFields}
                />
            </Grid>
        </Grid>

    )
}