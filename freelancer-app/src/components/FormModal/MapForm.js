import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { URL } from '../../constants';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
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
	const history = useHistory();

	const [values, setValues] = useState({
		description: props.description,
		projectName: '',
		deadline: '',
		goalsCount: 0
	});


	const [goals, setGoals] = useState([{
		id: 0,
		phase: "",
		name: '',
		meaningful: false,
		description: ''
	}])

	const addGoal = (event) => {
		event.preventDefault();
		let counter = values.goalsCount;
		counter++;

		setGoals([...goals, {
			id: counter,
			phase: "",
			name: '',
			meaningful: false,
			description: ''
		}]);

		setValues({ ...values, goalsCount: counter })

	}

	const deleteGoal = (event, id) => {
		event.preventDefault();

		let counter = values.goalsCount;
		if (counter > 0) {
			counter--;
			setValues({ ...values, goalsCount: counter })
			setGoals(goals.filter(goal => goal.id !== id))
		}
	}


	const onSubmit = (event) => {
		event.preventDefault();
		const newMap = {
			description: values.description,
			project_name: values.projectName,
			price: props.price,
			owner_id: props.customerId,
			projectId: props.projectId,
			deadline: values.deadline,
			goals: goals,

		};
		axios.post(URL + `api/jobs`, newMap, { withCredentials: true, credentials: 'include' })
			.then(response => {
				const data = {
					jobId : response.data,
				}
				history.push({
					pathname: `/${props.user.first_name}_${props.user.last_name}/map/${response.data}`,
					state : data
				})
			})
			.catch(err => {
				console.log(err);
			});

	}

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	}

	const goalHandleChange = (e, index) => {

		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;

		setGoals(goals.map(goal => {

			if (goal.id === index) {
				if (name !== 'meaningful')
					goal[name] = value
				else {
					let bool = goal[name];
					goal[name] = !bool;
				}
			}

			return goal;
		}))

	}

	const forEachGoal = (goal, id) => {

		return (
			<Goal deleteGoal={deleteGoal} handleChange={goalHandleChange} key={id} values={goal} />
		)
	}

	return (

		<form>
			<FormControl>
				<Grid container className={classes.gridBox}>
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
							value={values.description}
							onChange={handleChange}
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
							value={values.projectName}
							onChange={handleChange}
							autoFocus
						/>
					</Grid>
					<Grid item style={{ textAlign: 'center' }} xs={6}>
						<TextField
							name="deadline"
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
							value={values.deadline}
							onChange={handleChange}

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
							onClick={addGoal}
						>
							Add
          </Button>
					</Grid>
					<Grid item xs={12}>
						{goals.map(forEachGoal)}

					</Grid>


				</Grid>

				<Grid container justify="center" >

					<Button
						type="submit"
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={onSubmit}
					>
						Submit
        			</Button>
				</Grid>
			</FormControl>
		</form>
	)
}
