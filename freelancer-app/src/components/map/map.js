import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Phase from './phase'

import { Line } from 'rc-progress';
import Goal from './goal'

import SideBar from './sideBar'


const useStyles = makeStyles({
    container: {
        marginTop: 80,
        // backgroundColor: 'grey',
    }
});


export default function Map(props) {
    const [goals, setGoals] = useState([]);
    const [phases, setPhases] = useState([]);

    const colors = ['red', 'green', 'yellow', 'purple'];


    useEffect(() => {
        axios.get('http://localhost:3000/api/jobs/26', { withCredentials: true, credentials: 'include' })
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
            console.log('here');
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


    const classes = useStyles();
    return (
        <>

            {/* <SimpleBar> */ }
            {/* <SideBar /> */ }

            <div className={ classes.container }>

                { phases.map((phase, i) => eachPhase(phase, i)) }

            </div>
            {/* </SimpleBar > */ }
        </>
    )
}