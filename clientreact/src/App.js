import React, { Component } from 'react';
import './App.css';
import {LoginFormWindow} from "./Components/LoginFormWindow/LoginFormWindow";
import {ForgotPass} from "./Components/ForgotPass/ForgotPass";
import  { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

//<p className="App-intro">{this.state.apiResponse}</p>

function App(props){
    let SystemStatus;
    let Users;
    let Groups;
    let VoiceMenu;
    let Feedback;
    let CallsDescriptions;
    let NetworkSettings;
    return(
       // <Switch>
        <div>
            <Route path='/' component={LoginFormWindow}/>
            <Route path='/forgotpass' component={ForgotPass}/>
            <Route path='/systemstatus' component={SystemStatus}/>
            <Route path='/users' component={Users}/>
            <Route path='/groups' component={Groups}/>
            <Route path='/voicemenu' component={VoiceMenu}/>
            <Route path='/feedback' component={Feedback}/>
            <Route path='/callsdescriptions' component={CallsDescriptions}/>
            <Route path='/networksettings' component={NetworkSettings}/>
        </div>

       // </Switch>
    )
}

export default App;
