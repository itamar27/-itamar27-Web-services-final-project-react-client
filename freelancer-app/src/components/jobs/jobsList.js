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
        marginBottom: '8vh',
    },


});


export default function JobsList(props) {
    const classes = useStyles();

    console.log(props);
    const eachJob = (job, i) => {
        return (
            <Job
                key={ i }
                id={ job.project_id }
                title={ job.title }
                description={ job.description }
                comments={ job.comment }
                price={ job.price }
                customerId={ job.owner_id }
                role={ props.user.role }
                editComment = {props.editComment}
                saveComment = {props.saveComment}
                accept = {props.accept}
                projectId = {job.project_id}
                active = {props.active}

            />
        )
    }

    // console.log(props.jobs)

    return (
        <Paper className={ classes.container }>
            {props.jobs ? props.jobs.map(eachJob) : null }
        </Paper >
    )
}