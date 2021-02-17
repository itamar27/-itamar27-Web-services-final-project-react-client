import { makeStyles } from '@material-ui/core/styles';
import { URL } from '../../constants';
import React, { useState, useContext, useEffect } from "react";
import Paper from '@material-ui/core/Paper';
import { UserContext } from '../../userContext';
import axios from 'axios'
import JobList from '../jobs/jobsList'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        boxShadow: 'none',
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#3b1687',

    },
});


export default function UserPage(props) {
    const [jobOffers, setJobOffers] = useState(null);
    const [activeJobs, setActiveJobs] = useState(null);
    const { user} = useContext(UserContext);

    const classes = useStyles();


    useEffect(() => {
        // axios.get(`http://localhost:3000/api/jobs/${user.id}`, { withCredentials: true, credentials: 'include' })
        //     .then((response) => {
        //         setActiveJobs(response.data)
        //         console.log(response.data);
        //     })
        //     .catch((err) => {
        //         console.log("ERROR WITH GET ACTIVE JOBS")
        //     })

        getJobOffers();
    }, [user]);

    const getJobOffers = () => {
        axios.get(`http://localhost:3000/api/freelancerApi/projects/user`, { withCredentials: true, credentials: 'include' })
            .then((response) => {
                setJobOffers(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleCommentChange = (event, id) => {

        const index = jobOffers.findIndex(offer => offer.project_id === id);
        let newJobOffers = [...jobOffers];
        newJobOffers[index]['comment'] = event.target.value;
        setJobOffers(newJobOffers);
    }

    const saveComment = (id, value) => {

        axios.put(URL + `api/comments/${id}`, { comment: value }, { withCredentials: true, credentials: 'include' })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }

    if (!user) {
        return (
            <>
            </>
        )
    }

    return (
        <Paper className={classes.container}>
            <h1 className={classes.title}>{user.first_name} welcome back!</h1>
            { jobOffers ? <JobList jobs={jobOffers} editComment={handleCommentChange} saveComment={saveComment} user={user} /> : null}
        </Paper >
    )
}