//import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import Footer from './footer';
// import SignIn from './SignUp/signin';
// import FormModal from './FormModal/formModal';

import Chat from './map/chat/chat'
import EditGoal from './map/editGoal'
import Map from './map/map'

import RightDrawer from './map/sideBar'

import Goal from './map/goal'
import SignIn from './SignUp/signIn';

const App = (props) => {

    return (
        <>
            <NavBar />
            <Map />
            <Footer />
        </>
    )
}

export default App; 