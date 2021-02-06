import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


import Goal from './Goal';





const useStyles = makeStyles((theme) => ({

  gridBox: {
    marginTop: theme.spacing(2),
  },
  inputsContainer: {
    flexGrow: 2,
    marginTop: theme.spacing(2),
    textalign: 'cetner',
  },
  button: {
    backgroundColor: '#98EFAB',
    "&:hover": {
      backgroundColor: "#61BB61",

    },
    color: '#FFF',
  },
  submit: {
    height: '5vh',
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#85BEF9',

  }
}));


export default function MapForm(props) {


  const classes = useStyles();
  const [values, setValues] = useState({
    description: '',
    projectName: '',
    deadline: '',
    goals: 0
  });
  const [goal, setGoal] = useState([{
    id: 0,
    phase: "",
    name: '',
    meaningful: false,
    description: ''
  }])

  const addGoal = () => {
    console.log(values.goals)
    let counter = values.goals
    counter++
    setValues({ ...values,goals : counter   })

  }
  const deleteGoal = (event, id) => {
      event.preventDefault();

    console.log(values.goals)
    let counter = values.goals
    counter--

    if(counter > 0)
      setValues({...values, goals : counter})
  }


  return (

    <form>
      <FormControl>
        <Grid Container className={classes.gridBox}>
          <Grid item xs={12} >
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
        </Grid>

        <Grid container spacing={2} className={classes.inputsContainer}>

          <Grid item style={{ textAlign: 'center' }} xs={6}>
            <TextField
              autoComplete="projectName"
              name="projectName"
              variant="outlined"
              required
              id="projectName"
              label="project name"
              size="small"
              autoFocus
            />
          </Grid>
          <Grid item style={{ textAlign: 'center' }} xs={6}>
            <TextField
              name="Deadline"
              variant="outlined"
              required
              id="deadline"
              label="Deadline"
              size="small"
              autoFocus
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}

            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.inputsContainer}>
          <Grid item xs={2} >
            <Typography variant="h6" component="h2" gutterBottom>
              Goals
          </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick = {addGoal}
            >
              Add
          </Button>
          </Grid>

          <Grid item xs={12}  >
            <Goal deleteGoal = {deleteGoal} values={goal} />
          </Grid>

        </Grid>
        <Grid container justify="center" >

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          // onClick={onSubmit}
          >
            Submit
        </Button>
        </Grid>
      </FormControl>
    </form>
  )
}
