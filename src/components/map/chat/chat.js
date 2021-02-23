import React from "react";
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
    container: {
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

    const eachComment = (comment, i) => {

        return (
            <ChatMessage
                key={ i }
                role={ comment.role }
                time={ comment.time }
                name={ comment.name }
                comment={ comment.comment }
            />
        )
    }

    return (
        <div className={ classes.root }>
            <div className={ classes.container }>
                <SimpleBar style={ { height: '35vh', maxHeight: '35vh', paddingRight: 10 } }>
                    { props.comments.map((comment, i) => eachComment(comment, i)) }
                </SimpleBar>
            </div>
            <div className={ classes.fotter }>
                <FormControl className={ classes.textField } >
                    <Input className={ classes.input }
                        id="cooment"

                        type='text'
                        value={ props.newComment }
                        onChange={ props.handleChange }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={ () => props.send() } >
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