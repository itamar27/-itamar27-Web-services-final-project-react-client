import { makeStyles } from '@material-ui/core/styles';
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


});


export default function UserPage(props) {
    const [jobOffers, setJobOffers] = useState(null)
    const [activeJobs, setActiveJobs] = useState(null)
    const { user, setUser } = useContext(UserContext)

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

        axios.get(`http://localhost:3000/api/freelancerApi/projects/user`, { withCredentials: true, credentials: 'include' })
            .then((response) => {
                setJobOffers(response.data)
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err)
            })

    }, []);


    return (
        <Paper className={ classes.container }>
            { jobOffers ? <JobList jobs={ jobOffers } /> : null }
        </Paper >
    )
}