import { makeStyles } from '@material-ui/core/styles';
import { URL } from '../../constants';
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
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
        fontWeight: '500',
        color: '#5C4FA0',
        fontSize: '4vmin'
    },
});


export default function UserPage(props) {
    const [jobOffers, setJobOffers] = useState(null);
    const [activeJobs, setActiveJobs] = useState(null);
    const { user } = useContext(UserContext);
    const history = useHistory();
    const classes = useStyles();


    useEffect(() => {
        if (user)
            getActiveJobs();
        getJobOffers();
    }, [user]);

    const getActiveJobs = () => {
        axios.get(URL + `api/jobs/user/${user.id}`, { withCredentials: true, credentials: 'include' })
            .then((response) => {
                setActiveJobs(response.data)
            })
            .catch((err) => {
                console.log("ERROR WITH GET ACTIVE JOBS")
            })
    };

    const getJobOffers = () => {
        axios.get(URL + `api/freelancerApi/projects/user`, { withCredentials: true, credentials: 'include' })
            .then((response) => {
                setJobOffers(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const goToMap = (e, projectId) => {
        e.preventDefault();
        const data = {
            jobId: projectId,
        }
        history.push({
            pathname: `/user/${user.first_name}_${user.last_name}/map/${projectId}`,
            state: data
        })

    }

    const handleCommentChange = (event, id) => {
        const index = jobOffers.findIndex(offer => offer.project_id === id);
        let newJobOffers = [...jobOffers];
        newJobOffers[index]['comment'] = event.target.value;
        setJobOffers(newJobOffers);
    };

    const saveComment = (id, value) => {

        axios.put(URL + `api/comments/${id}`, { comment: value }, { withCredentials: true, credentials: 'include' })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    };

    if (!user) {
        return (
            <>
            </>
        )
    };

    return (
        <Paper className={ classes.container }>
            <h1 className={ classes.title }>{ user.first_name } welcome back!</h1>
            {activeJobs ? <JobList goToMap={ goToMap } active={ true } jobs={ activeJobs } editComment={ handleCommentChange } saveComment={ saveComment } user={ user } /> : null }
            {jobOffers ? <JobList jobs={ jobOffers } editComment={ handleCommentChange } saveComment={ saveComment } user={ user } /> : null }
        </Paper >
    )
};