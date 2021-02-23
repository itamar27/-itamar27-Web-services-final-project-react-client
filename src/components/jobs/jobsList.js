import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Paper from '@material-ui/core/Paper';
import Job from "./job"


const useStyles = makeStyles({
    container: {
        marginTop: 20,
        marginBottom: '4vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        boxShadow: 'none',
        backgroundColor: '#FFFFFF',
    },
});


export default function JobsList(props) {
    const classes = useStyles();

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
                goToMap = {props.goToMap}

            />
        )
    }


    return (
        <Paper className={ classes.container }>
            {props.jobs ? props.jobs.map(eachJob) : null }
        </Paper >
    )
}