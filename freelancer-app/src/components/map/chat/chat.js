import React, { useState, useEffect } from "react";


import ChatMessage from './chatMessage'
import { makeStyles } from '@material-ui/core/styles';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import Input from '@material-ui/core/Input';



const useStyles = makeStyles({
    'container': {
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#c0ace8',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,

        width: '100%',
        boxShadow: 'none',

    },

    fotter: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: 'none',
        height: '5vh',

        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#c0ace8',
        borderTopWidth: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    textField: {
        width: '90%',

    },
    input: {
        fontWeight: 300,
        fontSize: '2vh'
    },
    root: {
        width: '92%',
        margin: '1.5vh'
    }


});


export default function Chat(props) {
    const classes = useStyles();
    const [newComment, setComment] = useState('')

    const comments = [
        {
            type: 'costumer',
            time: '12:33:03',
            name: 'my name',
            comment: 'this is a comment about somthing'
        },
        {
            type: 'freelancer',
            time: '12:33:03',
            name: 'his name',
            comment: 'this is a comment about somthing'
        },
        {
            type: 'costumer',
            time: '12:33:03',
            name: 'my name',
            comment: 'this is a comment about somthing'
        },
        {
            type: 'freelancer',
            time: '12:33:03',
            name: 'his name',
            comment: 'this is a comment about somthing'
        },
        {
            type: 'costumer',
            time: '12:33:03',
            name: 'my name',
            comment: 'this is a comment about somthing'
        },
        {
            type: 'freelancer',
            time: '12:33:03',
            name: 'his name',
            comment: 'this is a comment about somthing'
        },
        {
            type: 'costumer',
            time: '12:33:03',
            name: 'my name',
            comment: 'this is a comment about somthing'
        },
        {
            type: 'freelancer',
            time: '12:33:03',
            name: 'his name',
            comment: 'this is a comment about somthing'
        }
    ]

    const handleChange = (event) => {
        setComment(event.target.value)
        console.log(newComment);
    };

    const handleClick = () => {
        console.log('send clicked');
    };


    const eachComment = (comment, i) => {

        return (
            <ChatMessage
                key={ i }
                type={ comment.type }
                time={ comment.time }
                name={ comment.name }
                comment={ comment.comment }
            />
        )
    }

    return (
        <div className={ classes.root }>
            <div className={ classes.container }>
                <SimpleBar style={ { height: '30vh', maxHeight: '30vh', paddingRight: 10 } }>
                    { comments.map((comment, i) => eachComment(comment, i)) }
                </SimpleBar>
            </div>
            <div className={ classes.fotter }>
                <FormControl className={ classes.textField } >
                    <Input className={ classes.input }
                        id="cooment"

                        type='text'
                        value={ newComment }
                        onChange={ handleChange }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={ handleClick }>
                                    <SendIcon style={ { width: '3vh', height: '3vh' } } />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

            </div>
        </div>

    )
}