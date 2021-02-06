// import React, { useState, useEffect } from 'react';
import NavBar from './navbar.js';
import Footer from './footer.js';
import SignIn from './SignUp/signIn.js';

import JobsList from './jobs/jobsList'
import PersistentDrawerLeft from './map/sideBar'

const App = (props) => {

    return (
        <>
            <NavBar />
            <PersistentDrawerLeft />
            <Footer />
        </>
    )
}

export default App; 