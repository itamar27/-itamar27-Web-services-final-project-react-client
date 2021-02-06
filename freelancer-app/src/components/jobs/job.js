import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import { Button } from '@material-ui/core';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Card } from '@material-ui/core';


const useStyles = makeStyles({
    'container': {
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: '#c0ace8',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,

        height: '40vh',
        width: '25vw',

        overflow: 'auto',
        padding: 15,
        boxShadow: 'none',

    },

    fotter: {
        width: '25vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15,
        boxShadow: 'none',

        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: '#c0ace8',
        borderTopWidth: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0


    },
    content: {
        wordWrap: 'break',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontSize: '2.7vmin',
        maxFontSize: '10px',
        fontWeight: 'bold',
        color: '#006936',
    },

    button: {
        backgroundColor: '#b0ffbc',
        '&:hover': {
            backgroundColor: '#deffe3',
        }
    }

});


export default function Job(props) {
    const classes = useStyles();
    return (
        <Card style={ { boxShadow: 'none', margin: 30 } }>
            <Card className={ classes.container }>
                <SimpleBar style={ { maxHeight: '39vh', paddingRight: 15 } }>
                    <div className={ classes.content }>
                        <h1 style={ { marginTop: 10, marginBottom: 0, fontSize: '4vmin', fontWeight: 500, color: '#3b1687' } }>
                            { props.title }
                        </h1>

                        <p style={ { fontSize: '2.2vmin' } }>
                            { props.description }
                        </p>

                        <label style={ { fontSize: '2.5vmin', fontWeight: 500, marginTop: 10, color: '#3b1687' } } >
                            Author Comments:
                        </label>

                        <p style={ { marginTop: 5, fontSize: '2.2vmin' } }>
                            { props.comments }
                        </p>

                    </div>

                </SimpleBar>
            </Card>
            <Card className={ classes.fotter }>
                <label style={ { height: 'fit-content', fontSize: '2.6vh', fontWeight: 500 } }>
                    { `${props.price}$` }
                </label>

                { props.freelancer ?
                    <Button classes={ { label: classes.label, root: classes.button } }>
                        Accept!
                    </Button>
                    :
                    null
                }

            </Card>
        </Card>

    )
}