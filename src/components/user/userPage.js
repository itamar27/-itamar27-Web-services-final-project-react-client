import { makeStyles } from '@material-ui/core/styles';
import { URL } from '../../constants';
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { UserContext } from '../../userContext';
import axios from 'axios'
import JobList from '../jobs/jobsList'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        boxShadow: 'none',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontWeight: '500',
        width: '100%',
        textAlign: 'center',
        color: '#5C4FA0',
        fontSize: '4vmin'
    },
    loading: {
        position: 'relative',
        marginTop: '15vh',
        marginHorizontal: 'auto'
    }
});


export default function UserPage(props) {
    const [jobOffers, setJobOffers] = useState(null);
    const [activeJobs, setActiveJobs] = useState(null);
    const { user, login } = useContext(UserContext);
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        login()
    }, []);

    useEffect(() => {
        if (user) {
            if (user.role === 'customer') {
                getActiveJobs();
                getJobOffers();
            }
            else {
                getFreelancerActiveJobs()
            }
        }
    }, [user]);

    const getActiveJobs = () => {
        axios.get(URL + `api/jobs/user/${user.id}`, { withCredentials: true, credentials: 'include' })
            .then((response) => {
                if (!response.data.error)
                    setActiveJobs(response.data)

            })
            .catch((err) => {
                console.log(`ERROR WITH GET ACTIVE JOBS,${err}`)
            })
    };

    const getFreelancerActiveJobs = () => {
        axios.get(URL + `api/jobs/freelancer`, { withCredentials: true, credentials: 'include' })
            .then((response) => {
                if (!response.data.error)
                    setActiveJobs(response.data)

            })
            .catch((err) => {
                console.log(`ERROR WITH GET ACTIVE JOBS at freelancer route,${err}`)
            })
    };

    const getJobOffers = () => {
        axios.get(URL + `api/freelancerApi/projects/user`, { withCredentials: true, credentials: 'include' })
            .then((response) => {
                if (!response.data.error)
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
                <CircularProgress className={ classes.loading } />
            </>
        )
    };

    return (
        <Paper className={ classes.container }>
            <h1 className={ classes.title }>{ user.first_name } welcome back!</h1>
            { activeJobs || jobOffers ?
                <>
                    {activeJobs ? <JobList goToMap={ goToMap } active={ true } jobs={ activeJobs } editComment={ handleCommentChange } saveComment={ saveComment } user={ user } /> : null }
                    {jobOffers ? <JobList jobs={ jobOffers } editComment={ handleCommentChange } saveComment={ saveComment } user={ user } /> : null }
                </>
                :
                <CircularProgress className={ classes.loading } />
            }
        </Paper >
    )
};