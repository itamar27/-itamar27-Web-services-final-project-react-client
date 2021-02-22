import { makeStyles } from '@material-ui/core/styles';
import React from "react";


const useStyles = makeStyles({
    container: {
        width: '100%',
    },
    base: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        borderRadius: 5,
        padding: 7,
        margin: 2
    },
    color1: {
        backgroundColor: "#dee1ff"
    },
    color2: {
        backgroundColor: "#e2ffde"
    },
    label: {
        fontWeight: 300,
        color: '#454545',
        fontSize: '1.7vh'
    },
    comment: {
        fontWeight: 300,
        margin: 0,
        fontSize: '2vh',
        color: '#00074a'

    }
});


export default function ChatMessage(props) {
    const classes = useStyles();
    return (
        <div style={ { width: '100%', display: 'flex', justifyContent: props.type === 'freelancer' ? 'flex-start' : 'flex-end' } }>
            <div className={ `${classes.base} ${props.type === 'freelancer' ? classes.color1 : classes.color2}` }>
                <label className={ classes.label }>
                    { `${props.time}, ${props.name}:` }
                </label>
                <p className={ classes.comment }>
                    { props.comment }
                </p>
            </div>
        </div>
    )
}


