//import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import Footer from './footer';
import SignIn from './SignUp/signin';
import FormModal from './FormModal/formModal';

const App = (props) => {

    return (
        <>
            <NavBar />
            <SignIn />
            <Footer />
        </>
    )
}

export default App;