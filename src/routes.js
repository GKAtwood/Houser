import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';



export default function Routes(){

    return(

        <Switch>

            <Route exact path = '/' component ={Dashboard}/>
            <Route exact path = '/wizard' component ={Wizard}/>

        </Switch>





    )



}