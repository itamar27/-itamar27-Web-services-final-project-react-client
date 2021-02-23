import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Card } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    'container': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 5,
        borderStyle: 'solid',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        height: '35vh',
        width: '20vw',
        overflow: 'auto',
        padding: 15,
        boxShadow: 'none',
    },

    footer: {
        width: '20vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15,
        boxShadow: 'none',
        borderWidth: 5,
        borderStyle: 'solid',
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
        fontSize: '2vmin',
        fontWeight: '500',
        color: '#FFF',
    },

    button: {
        backgroundColor: '#98EFAB',
        "&:hover": {
            backgroundColor: "#61BB61",

        },
        color: '#FFF',
    },
    iconButton: {
        boxShadow: 'none',
        backgroundColor: '#FFF'

    },
    icon: {
        fontSize: '3vmin'
    },
    input: {
        width: '100%',
        border: '2px solid #EE4D47',
        borderRadius: 5,
        marginBottom: 14,
        fontWeight: 'bold',
    },
    active: {
        position: 'absolute',
        fill: '#1bc234',
        fontWeight: 'bold',
        fontSize: '1.25vmin',
        top: 5,
        right: 5,
        margin: 0,
        padding: 0
    }
});


export default function Job(props) {

    const [editComment, setEditComment] = useState(false);
    const classes = useStyles();

    const color = () => {
        if (props.active)
            return "#A9DEB6";
        else
            return "#B6ACD4";

    }

    const renderCustomerButton = () => {

        if (props.active) {
            return (
                <Fab size='small' className={ classes.iconButton } onClick={ (e) => props.goToMap(e, props.projectId) } >
                    <VisibilityIcon className={ classes.icon } />
                </Fab>
            )
        }
        else {
            return (
                !editComment ?
                    <Fab size='small' className={ classes.iconButton } onClick={ () => setEditComment(!editComment) } >
                        <EditIcon className={ classes.icon } />
                    </Fab> :
                    <Fab size='small' className={ classes.iconButton } onClick={ () => { setEditComment(!editComment); props.saveComment(props.id, props.comments) } } >
                        <ArrowForwardIcon className={ classes.icon } />
                    </Fab>

            )
        }
    }

    const renderFreelancerButton = () => {
        if (props.active) {
            return (
                <Fab size='small' className={ classes.iconButton } onClick={ (e) => props.goToMap(e, props.projectId) } >
                    <VisibilityIcon className={ classes.icon } />
                </Fab>
            )
        }
        else {
            return (
                <Button
                    variant="contained"
                    classes={ { label: classes.label, root: classes.button } }
                    onClick={ e => props.accept(e, props.description, props.title, props.price, props.customerId, props.projectId) }
                >
                    Accept!
                </Button>

            )
        }

    }

    const renderComments = () => {
        const comment = props.comments;
        const editing = (<form>
            <TextField

                autoComplete="comment"
                name="comment"
                variant="outlined"
                multiline
                rows={ 3 }
                rowsMax={ 5 }
                fullWidth
                value={ props.comments }
                onChange={ (event) => props.editComment(event, props.id) }
                id="comment"
                label="comment"
            />
        </form>);
        const notEditing = (<>
            <label style={ { fontSize: '2.5vmin', fontWeight: 400, marginTop: 10, color: '#3b1687' } } >
                Author Comments:
            </label>
            <p style={ { marginTop: 5, fontSize: '2.2vmin' } }>
                { props.comments }
            </p>
        </>);

        if (comment) {
            if (editComment)
                return editing
            else
                return notEditing;
        }
        else {
            if (editComment)
                return editing
            else
                return null
        }
    }

    return (
        <Card style={ { boxShadow: 'none', margin: 30 } }>
            <Card className={ classes.container } style={ { borderColor: color() } }>
                { props.active ? <h6 className={ classes.active } >active</h6> : <h6 className={ classes.active } >Job offer</h6> }
                <SimpleBar style={ { maxHeight: '100%', paddingRight: 15 } }>
                    <div className={ classes.content }>
                        <h1 style={ { display: 'inline', marginTop: 10, marginBottom: 0, fontSize: '3vmin', fontWeight: 400, color: '#3b1687' } }>
                            { props.title }
                        </h1>

                        <p style={ { fontSize: '2vmin' } }>
                            { props.description }
                        </p>
                        { renderComments() }
                    </div>

                </SimpleBar>
            </Card>
            <Card className={ classes.footer } style={ { borderColor: color() } }>
                <label style={ { height: 'fit-content', fontSize: '2.6vmin', fontWeight: 500 } }>
                    { `${props.price}$` }
                </label>

                { props.role === 'freelancer' ?
                    renderFreelancerButton()
                    :
                    renderCustomerButton()

                }

            </Card>
        </Card>

    )
}