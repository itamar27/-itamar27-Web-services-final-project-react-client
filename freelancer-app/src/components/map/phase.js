import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Goal from './goal'
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    goalContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 30
    },
    labelContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
    }
});


export default function Phase(props) {
    const classes = useStyles();

    const eachGoal = (goal, i) => {
        console.log(goal);
        return (
            <Goal
                key={ i }
                index={ i }
                title={ goal.name }
                description={ goal.description }
                meaningful={ goal.meaningful }
                color={ props.color }
                progress={ goal.progress }
                editGoal={ props.editGoal }
            />
        )
    }
    return (
        <>
            <div className={ classes.mainContainer }>
                <div className={ classes.labelContainer }>
                    <label style={ { fontSize: '3vh', marginLeft: '5vw', fontFamily: 'Raleway' } }>
                        { `Phase:${props.phaseNumber}` }
                    </label>
                </div>
                <div className={ classes.goalContainer }>
                    { props.goals.map((goal, i) => eachGoal(goal, i)) }
                </div>

            </div>
        </>
    )
}


