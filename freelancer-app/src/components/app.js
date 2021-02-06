// import React, { useState, useEffect } from 'react';
import NavBar from './navbar.js';
import Footer from './footer.js';
import SignIn from './SignUp/signIn.js';

import JobsList from './jobs/jobsList'

const App = (props) => {

    return (
        <>
            <NavBar />
            <JobsList />
            <Footer />
        </>
    )
}

export default App; 