import React, { useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Phase from './phase'
import URL from '../../constants'


import { UserContext } from '../../userContext';


import SideBar from './sideBar'


const useStyles = makeStyles({

});


export default function Map(props) {
    //for guy's work...
    // const jobId = 10;

    const defaultGoal = {
        comments: [],
        description: '',
        meaningful: false,
        name: '',
        phase: -1,
        progress: 0,
        _id: 0
    }
    const { user } = useContext(UserContext);
    const { jobId } = useLocation().state || {};
    // const classes = useStyles();
    const [goals, setGoals] = useState([]);
    const [job, setJob] = useState(null);
    const [phases, setPhases] = useState([]);

    const [comments, setComments] = useState([]);
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [sideBarGoal, setSideBarGoal] = useState(defaultGoal);


    const colors = ['#B9F5A9', '#F8F8B0', '#FAD8BF'];


    useEffect(() => {
        axios.get(URL + `api/jobs/${jobId}`, { withCredentials: true, credentials: 'include' })
            .then((response) => {
                setJob(response.data)
                setGoals(response.data.goals)
            })
            .catch((err) => {
                console.log(err)
            })

    }, []);


    const splitToPhases = () => {
        let phaseNumbers = []
        let tmpPhases = []

        goals.forEach((goal) => {
            if (!phaseNumbers.includes(goal.phase)) {
                phaseNumbers.push(goal.phase)
                tmpPhases.push([])
            }
        })

        goals.forEach((goal) => {
            tmpPhases[goal.phase - 1].push(goal)
        })

        setPhases(tmpPhases)
    }

    useEffect(() => {
        if (goals !== 0) {
            splitToPhases();
        }
    }, [goals]);

    useEffect(() => {
        if (sideBarGoal._id !== 0) {
            setSideBarOpen(true)
        }

    }, [sideBarGoal]);


    const editGoal = (id) => {
        let goalToEdit = goals.filter((goal) => goal._id === id)[0]
        setSideBarGoal(goalToEdit);
    }

    const closeSideBar = () => {
        setSideBarOpen(false);
        setSideBarGoal(defaultGoal)
    }

    const updateGoal = (data) => {
        console.log('updating goal and leaving open');
        const newGoals = goals.map((goal) => {
            if (goal._id === data._id) {
                goal = data
            }
            return goal
        })

        closeSideBar()
        setGoals(newGoals)
        setJob({ ...job, goals: goals })
    }

    const updateJob = () => {
        axios.post(URL + `api/jobs/${job.id}`, job, { withCredentials: true, credentials: 'include' })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const deleteGoal = () => {
        console.log('deleting goal and closing side bar');
        const newGoals = goals.filter((goal) => goal._id !== sideBarGoal._id)

    }

    const saveComment = (comment) => {
        console.log('saving comment: ', comment);
    }


    const eachPhase = (phase, i) => {
        return (
            <Phase
                key={ i }
                goals={ phase }
                color={ colors[i] }
                phaseNumber={ i + 1 }
                editGoal={ editGoal }
            />
        )
    }



    if (!user) {
        return (
            <>
            </>
        )
    }

    return (
        <>
            <SideBar open={ sideBarOpen } close={ closeSideBar } data={ sideBarGoal } submit={ updateGoal } delete={ deleteGoal } send={ saveComment } />
            <SimpleBar>
                <div style={ { marginTop: 20, marginBottom: 40 } }>
                    { phases.map((phase, i) => eachPhase(phase, i)) }
                </div>
            </SimpleBar >
        </>
    )
}