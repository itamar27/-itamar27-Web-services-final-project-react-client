// import React, { useState, useEffect } from 'react';
import NavBar from './navbar.js';
import Footer from './footer.js';
import SignIn from './SignUp/signin.js';

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