import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        margin: 10,
        alignItems: 'center'
    },

    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '92%',
        margin: '1.5vh',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#c0ace8',
        borderRadius: 10,
    },


});


export default function EditGoal(props) {
    const [values, setValues] = useState({
        phase: props.phase,
        phaseName: props.phaseName,
        description: props.description
    })

    const classes = useStyles();

    const handleChange = input => event => {
        setValues({ ...values, [input]: event.target.value });
    }

    const handleSubmit = () => {
        console.log('send clicked');
    };



    return (
        <div className={ classes.mainContainer }>
            <div className={ classes.container }>
                <div style={ { marginTop: 20, display: 'flex', justifyContent: 'space-between', width: '100%' } }>
                    <TextField style={ { width: '30%' } }
                        name="phase"
                        variant="outlined"
                        required
                        id="phase"
                        label="Phase"
                        onChange={ handleChange('phase') }
                        defaultValue={ values.phase }
                    />
                    <TextField style={ { width: '65%' } }
                        variant="outlined"
                        required
                        id="phaseName"
                        label="Phase name"
                        name="phaseName"
                        onChange={ handleChange('phaseName') }
                        defaultValue={ values.phaseName }
                    />
                </div>
                <FormControlLabel
                    value="start"
                    control={ <Checkbox color="primary" /> }
                    label="Start"
                    labelPlacement="start"
                />
                <TextField style={ { marginTop: 10, width: '100%' } }
                    variant="outlined"
                    required
                    multiline
                    rows={ 4 }
                    id="description"
                    label="Description"
                    name="description"
                    onChange={ handleChange('description') }
                    defaultValue={ values.description }
                />

                <Button style={ { width: '25%', marginTop: 15 } }
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={ classes.submit }
                    onClick={ handleSubmit }>
                    Save
                </Button>

            </div >
        </div>

    )
}