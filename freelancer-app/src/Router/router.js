import { Route, Switch } from 'react-router-dom';

import SignIn from '../components/SignUp/signIn';
import SignUp from '../components/SignUp/signUp';
// import JobsList from '../components/jobs/jobsList';
import UserPage from '../components/user/userPage'

export default function ReactRouter(props) {

    return (
        <>
            <Switch>
                <Route exact path='/' component={ SignIn } />
                <Route path="/signup" component={ SignUp } />
                <Route exact path="/user/:name" component={ UserPage } />
            </ Switch>
        </>
    )
}

