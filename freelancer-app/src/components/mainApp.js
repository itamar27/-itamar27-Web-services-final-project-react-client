import { useState, useMemo, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import ReactRouter from '../Router/router';
import { UserContext } from '../userContext';
import axios from 'axios';


const MainApp = () => {

    const [user, setUser] = useState(null);

    const userProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

    useEffect(() => {
        console.log('refresh');
        setUser();
    }, []);


  

    return (
        <>
            <UserContext.Provider value={userProvider}>
                <Navbar />
                <ReactRouter />
                <Footer />
            </UserContext.Provider>

        </>
    )
}

export default MainApp;