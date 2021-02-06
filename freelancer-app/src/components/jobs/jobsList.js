import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Job from "./job"

const Jobs = require('./mock.json')

const useStyles = makeStyles({
    container: {
        marginTop: 100,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        boxShadow: 'none',
    },


});


export default function JobsList(props) {
    const [jobs, setJobs] = useState(Jobs)

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
            { jobs.map(eachJob) }
        </Paper >
    )
}