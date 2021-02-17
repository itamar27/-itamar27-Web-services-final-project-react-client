import { Route, Switch } from 'react-router-dom';
import SignIn from '../components/SignUp/signIn';
import SignUp from '../components/SignUp/signUp';
import UserPage from '../components/user/userPage';
import jobOffers from '../components/jobOffers/jobOffers';
import Map from '../components/map/map';

export default function ReactRouter(props) {

  
    return (
        <>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/user/:name" component={UserPage} />
                <Route exact path='/job_offers' component={jobOffers}/>
                <Route exact path="/user/:name/map/:id" component={Map} />
            </ Switch>
        </>
    )
}

