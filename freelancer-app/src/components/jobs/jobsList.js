import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Job from "./job"


const useStyles = makeStyles({
    container: {
        marginTop: 20,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        boxShadow: 'none',
    },


});


export default function JobsList(props) {
    const classes = useStyles();

    const eachJob = (job, i) => {
        return (
            <Job
                key={ i }
                title={ job.title }
                description={ job.description }
                comments={ job.comments }
                price={ job.price }
                freelancer={ true }
            />
        )
    }

    return (
        <Paper className={ classes.container }>
            {props.jobs ? props.jobs.map(eachJob) : null }
        </Paper >
    )
}