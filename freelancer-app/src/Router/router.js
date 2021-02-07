import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

import SignIn from '../components/SignUp/signIn';
import SignUp from '../components/SignUp/signUp';
import JobsList from '../components/jobs/jobsList';

const ReactRouter = () => {

    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/user/:name/:id" component={JobsList} />
            </ Switch>
            <Footer />

        </>
    )
}

export default ReactRouter;