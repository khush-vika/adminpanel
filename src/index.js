import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link ,useHistory
} from "react-router-dom";

import App from './App';

 import Stripe from "./PG/Stripe";
import HOCC from './ComponentsFolder/HOCC';

const rootElement = document.getElementById('root');


ReactDOM.render(
  
  <> 
   <App />
  </>,
  rootElement
);
