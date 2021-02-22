import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Goal from './goal'


const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: '#FFFFFF',
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
        return (
            <Goal
                key={ i }
                index={ i }
                id={ goal._id }
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
            {props.goals ?
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
                : null
            }
        </>
    )
}


