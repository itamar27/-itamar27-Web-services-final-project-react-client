import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Goal from './goal'
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // width: '100%',
        padding: 30
    },
    labelContainer: {
        display: 'flex',
        justifyContent: 'flex-start'
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
                    <label style={ { fontSize: '3vh' } }>
                        { `Phase:${props.phaseNumber}` }
                    </label>
                </div>
                { props.goals.map((goal, i) => eachGoal(goal, i)) }
            </div>
        </>
    )
}


