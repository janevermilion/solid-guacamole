import React, { Component } from 'react';
import './App.css';
import {LoginFormWindow} from "./Components/LoginFormWindow/LoginFormWindow";
import {ForgotPass} from "./Components/ForgotPass/ForgotPass";
import {BrowserRouter, Route} from 'react-router-dom'
import Navigation from "./Components/Navigation/Navigation";
import Profiles from "./Components/Profiles/Profiles";

function App(props){
    return(
        <BrowserRouter>
            <div className={'app_container'}>
                <Navigation/>
                    <Route path='/login' render={()=><LoginFormWindow/>}/>
                    <Route path='/forgotpass' render={()=><ForgotPass/>}/>
                    <Route path='/profiles' render={()=><Profiles/>}/>
            </div>
        </BrowserRouter>
    )
}
// <Route path='/chat' render={()=><Chat/>}/>
export default App;
