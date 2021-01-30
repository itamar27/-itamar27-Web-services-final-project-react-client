import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

import SignIn from '../components/signIn';
import SignUp from '../components/SignUp/signUp'; 

const ReactRouter = () => {

    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path = '/' component = {SignIn} /> 
                <Route path = "/signup" component  = {SignUp} />
            </ Switch>
            <Footer />

        </>
    )
}

export default ReactRouter;