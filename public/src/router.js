import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Components/Home';
import About from './Components/About';
import Charts from './Components/Charts';

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ About } path="/about" /> 
    <Route component={ Charts } path="/charts" />
  </Switch>
)