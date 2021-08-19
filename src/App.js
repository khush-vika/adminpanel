import React, { Component } from 'react';
import HOCC from './ComponentsFolder/HOCC';
import SignIn from './ComponentsFolder/SignIn';
import SignUp from './ComponentsFolder/SignUp';
import ForgetPassword from './ComponentsFolder/ForgetPassword';
import Checkout from './ComponentsFolder/Checkout'
import Dashboard from './ComponentsFolder/Dashboard'
import Stripe  from './PG/Stripe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router> 
       <Switch>
       <Route exact path="/">
         <SignIn></SignIn>
       </Route>
       <Route path="/SignUp">
         <SignUp></SignUp>
       </Route>
       <Route path="/ForgetPassword">
         <ForgetPassword></ForgetPassword>
       </Route>
 
       <Route path="/Checkout">
         <Checkout></Checkout>
       </Route>

       <Route path="/Stripe">
         <Stripe></Stripe>
       </Route>


       <Route path="/Dashboard">
         <Dashboard></Dashboard>
       </Route>

       
     </Switch>
   </Router>
  );
}
 
export default App; 