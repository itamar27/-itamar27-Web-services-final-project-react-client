import { useContext } from "react";
import { UserContext } from '../userContext';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../components/SignUp/signIn';
import SignUp from '../components/SignUp/signUp';
import UserPage from '../components/user/userPage';
import { URL } from '../constants';
import axios from 'axios';


export default function ReactRouter(props) {

    // const { user, setUser } = useContext(UserContext);
    // const userConnection = () => {

    //     if (user === undefined || user === null) {
    //         try {
    //             const tmp =  axios.get(URL + 'auth/getCredentials', { withCredentials: true, credentials: 'include' });
    //             setUser(tmp.data);
    //             console.log(tmp.data);
    //         } catch (err) {

    //             console.log(err);
    //         }
    //     }
    // }
    return (
        <>
            {/* {userConnection()} */}
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/user/:name" component={UserPage} />
            </ Switch>
        </>
    )
}

