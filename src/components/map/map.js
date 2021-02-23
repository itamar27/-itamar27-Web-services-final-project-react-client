import React, { useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import axios from 'axios'
import Phase from './phase'
import { URL } from '../../constants'
import moment from 'moment'
import { UserContext } from '../../userContext';


import SideBar from './sideBar'

export default function Map(props) {

    const defaultGoal = {
        comments: [],
        description: '',
        meaningful: false,
        name: '',
        phase: -1,
        progress: 0,
        goals: null,
        _id: 0
    }

    const { user, login } = useContext(UserContext);
    const { jobId } = useLocation().state || {};
    const [goals, setGoals] = useState([]);
    const [job, setJob] = useState({});
    const [phases, setPhases] = useState([]);

    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [sideBarGoal, setSideBarGoal] = useState(defaultGoal);
    const [newComment, setNewComment] = useState('')


    const colors = ['#B9F5A9', '#F8F8B0', '#FAD8BF'];


    useEffect(() => {
        login()
    }, []);

    useEffect(() => {

        axios.get(URL + `api/jobs/${jobId}`, { withCredentials: true, credentials: 'include' })
            .then((response) => {
                setJob(response.data)
                setGoals(response.data.goals)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [jobId]);


    useEffect(() => {
        if (goals) {
            splitToPhases();
            updateJob()
        }
    }, [goals]);

    useEffect(() => {
        if (sideBarGoal._id !== 0) {
            setSideBarOpen(true)
        }

    }, [sideBarGoal]);

    const splitToPhases = () => {
        let phaseNumbers = []
        let tmpPhases = []

        goals.forEach((goal) => {
            if (!phaseNumbers.includes(goal.phase)) {
                phaseNumbers.push(goal.phase)
                tmpPhases.push([])
            }
        })

        goals.forEach((goal) => {
            tmpPhases[goal.phase - 1].push(goal)
        })

        setPhases(tmpPhases)
    }

    const editGoal = (id) => {
        let goalToEdit = goals.filter((goal) => goal._id === id)[0]
        setSideBarGoal(goalToEdit);
    }

    const closeSideBar = () => {
        setSideBarOpen(false);
        setSideBarGoal(defaultGoal)
    }

    const updateGoal = (close = true) => {
        const newGoals = goals.map((goal) => {
            if (goal._id === sideBarGoal._id) {
                return sideBarGoal
            }
            else
                return goal
        })

        if (close)
            closeSideBar()

        setGoals(newGoals)
    }

    const updateJob = () => {
        axios.put(URL + `api/jobs/${job.id}`, { goals: goals }, { withCredentials: true, credentials: 'include' })
            .then(response => {
                setJob(response.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    const deleteGoal = () => {
        const newGoals = goals.filter((goal) => goal._id !== sideBarGoal._id)
        setGoals(newGoals)
        closeSideBar()

    }


    const handleChange = event => {
        setSideBarGoal({ ...sideBarGoal, [event.target.name]: event.target.value });

    }

    const handleProgressChange = (value) => {
        setSideBarGoal({ ...sideBarGoal, 'progress': value });

    }

    const handleMeaningfullChange = (value) => {
        setSideBarGoal({ ...sideBarGoal, 'meaningful': value });
    }


    const handleCommentChange = (event) => {
        setNewComment(event.target.value)
    };

    const saveComment = () => {
        const comments = sideBarGoal.comments;
        const comment = {
            comment: newComment,
            time: moment().format("DD MM YYYY"),
            role: user.role,
            name: `${user.first_name} ${user.last_name}`
        }

        comments.push(comment)
        setNewComment('')
        setSideBarGoal({ ...sideBarGoal, comments: comments })
        updateGoal(false)

    }

    const eachPhase = (phase, i) => {
        return (
            <Phase
                key={ i }
                goals={ phase }
                color={ colors[i] }
                phaseNumber={ i + 1 }
                editGoal={ editGoal }

            />
        )
    }

    if (!user) {
        return (
            <>
            </>
        )
    }

    return (
        <>
            <SideBar
                open={ sideBarOpen }
                close={ closeSideBar }
                data={ sideBarGoal }
                submit={ updateGoal }
                delete={ deleteGoal }
                send={ saveComment }
                handleChange={ handleChange }
                handleProgressChange={ handleProgressChange }
                handleMeaningfullChange={ handleMeaningfullChange }
                handleCommentChange={ handleCommentChange }
                newComment={ newComment }
            />
            <SimpleBar>
                <div style={ { marginTop: 20, marginBottom: 40 } }>
                    { phases.map((phase, i) => eachPhase(phase, i)) }
                </div>
            </SimpleBar >
        </>
    )
}