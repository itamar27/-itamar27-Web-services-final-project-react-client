import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

import SignIn from '../components/SignUp/signIn';
import SignUp from '../components/SignUp/signUp';
import Click from '../components/FormModal/tmpButton';

const ReactRouter = () => {

    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path='/create_map' component={Click} />
            </ Switch>
            <Footer />

        </>
    )
}

export default ReactRouter;