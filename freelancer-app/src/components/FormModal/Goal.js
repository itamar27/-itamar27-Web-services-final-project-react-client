import React from 'react'
import { makeStyles } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box, Grid, TextField, Checkbox } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    input: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1)
    },
    box: {
        marginTop: theme.spacing(1),
    }

}));

export default function Goal(props) {

    const classes = useStyles();


    return (
        <div>
            <FormGroup id={props.values.id} >
                <Box border={1} borderRadius="borderRadius" borderColor="rgb(0,0,0,0.2)" className={classes.box}>

                    <Grid container spacing={3} className={classes.root}>
                        <Grid item xs={3} className={classes.input}>
                            <TextField
                                autoComplete="phase"
                                name="phase"
                                variant="outlined"
                                id="phase"
                                label="phase"
                                size="small"
                                required
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={5} className={classes.input}>
                            <TextField
                                autoComplete="projectName"
                                name="projectName"
                                variant="outlined"
                                id="projectNamee"
                                label="project name"
                                size="small"
                                required
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={1} className={classes.input}>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox
                                    color="primary"
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                />}
                                label={<div style={{ fontSize: '0.7rem' }}>Meaningful?</div>}
                            />
                        </Grid>

                        <Grid item xs={10} className={classes.input} >
                            <TextField

                                autoComplete="description"
                                name="description"
                                variant="outlined"
                                required
                                multiline
                                rows={3}
                                rowsMax={5}
                                fullWidth
                                id="description"
                                label="description"
                                autoFocus
                            />
                        </Grid>


                        <IconButton
                            aria-label="delete"
                            disableFocusRipple
                            disableRipple
                            style={{ backgroundColor: "transparent" }}
                            onClick = {console.log('clicked!')}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>



                    </Grid>

                </Box>
            </FormGroup >
        </div>
    )
}
