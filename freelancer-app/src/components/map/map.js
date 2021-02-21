import React, { useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Phase from './phase'

import { UserContext } from '../../userContext';


import SideBar from './sideBar'


const useStyles = makeStyles({

});


export default function Map(props) {
    //for guy's work...
    // const jobId = 10;

    const { user } = useContext(UserContext);
    const {jobId} = useLocation().state || {};
    // const classes = useStyles();
    const [goals, setGoals] = useState([]);
    const [phases, setPhases] = useState([]);

    const colors = ['#B9F5A9', '#F8F8B0', '#FAD8BF'];


    useEffect(() => {
        axios.get(`http://localhost:3000/api/jobs/${jobId}`, { withCredentials: true, credentials: 'include' })
            .then((response) => {

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

    const eachPhase = (phase, i) => {
        console.log(i);
        return (
            <Phase
                key={ i }
                goals={ phase }
                color={ colors[i] }
                phaseNumber={ i + 1 }
                editGoal={ () => { console.log('editing') } }

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
        <SimpleBar>
            <SideBar />

            <div style={ { marginTop: 20 } }>
                { phases.map((phase, i) => eachPhase(phase, i)) }
            </div>
        </SimpleBar >
    )
}