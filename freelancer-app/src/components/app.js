//import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import Footer from './footer';
import SignIn from './SignUp/signin';
import FormModal from './FormModal/formModal';

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