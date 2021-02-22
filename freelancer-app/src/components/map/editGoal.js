import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        margin: 10,
        marginTop: '25px',
        alignItems: 'center'
    },

    mainContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '92%',
        margin: '1.5vh',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#c0ace8',
        borderRadius: 10,
    },
    delete: {
        position: 'absolute',
        top: 0,
        right: 0,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    submit: {
        backgroundColor: '#B3E3F8'
    },
    label: {
        fontWeight: 400
    },
    flexContainer: {
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
    },
    checkboxLabel: {
        fontWeight: 300,
        fontSize: '2vmin'
    },
    input: {
        height: '2vh'
    }


});


export default function EditGoal(props) {
    const [values, setValues] = useState({
        comments: props.goal.comments,
        _id: props.goal._id,
        phase: props.goal.phase,
        name: props.goal.name,
        description: props.goal.description,
        meaningful: props.goal.meaningful,
        progress: props.goal.progress
    })

    const classes = useStyles();

    const handleChange = input => event => {
        setValues({ ...values, [input]: event.target.value });
    }

    const handleProgressChange = (value) => {
        setValues({ ...values, 'progress': value });
    }

    const handleMeaningfullChange = (value) => {
        setValues({ ...values, 'meaningful': value });
    }


    function valuetext(value) {
        return `${value}%`;
    }




    return (
        <div className={ classes.mainContainer }>
            <IconButton className={ classes.delete } onClick={ props.delete } >
                <DeleteIcon />
            </IconButton>
            <div className={ classes.container }>
                <div className={ classes.flexContainer }>
                    <FormControlLabel
                        name='meaningful'
                        control={ <Checkbox color="primary" checked={ values.meaningful } /> }
                        label="Meaningful phase"
                        labelPlacement="start"
                        onChange={ (e) => handleMeaningfullChange(e.target.checked) }
                        classes={ { label: classes.checkboxLabel } }
                        style={ { margin: 0 } }
                    />
                </div>
                <div style={ { marginTop: 5, display: 'flex', justifyContent: 'space-between', width: '100%' } }>
                    <TextField style={ { width: '30%' } }
                        name="phase"
                        variant="outlined"
                        required
                        id="phase"
                        label="Phase"
                        onChange={ handleChange('phase') }
                        defaultValue={ values.phase }
                        classes={ { root: classes.input } }
                    />
                    <TextField style={ { width: '65%' } }
                        variant="outlined"
                        required
                        id="goalName"
                        label="Goal name"
                        name="goalName"
                        onChange={ handleChange('name') }
                        defaultValue={ values.name }
                    />
                </div>
                <TextField style={ { marginTop: 10, width: '100%' } }
                    variant="outlined"
                    required
                    multiline
                    rows={ 4 }
                    id="description"
                    label="Description"
                    name="description"
                    onChange={ handleChange('description') }
                    value={ values.description }
                />
                <div className={ classes.flexContainer }>
                    <h4 style={ { marginRight: 10 } }>Progress:</h4>
                    <Slider
                        key={ `slider-${props.goal.progress}` }
                        defaultValue={ props.goal.progress }
                        getAriaValueText={ valuetext }
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={ 10 }
                        marks
                        min={ 0 }
                        max={ 100 }
                        onChangeCommitted={ (e, value) => handleProgressChange(value) }
                    />
                </div>

                <Button style={ { width: '25%' } }
                    type="submit"
                    variant="contained"
                    classes={ { label: classes.label, root: classes.submit } }
                    onClick={ () => props.submit(values) }>
                    Save
                </Button>

            </div >
        </div>

    )
}