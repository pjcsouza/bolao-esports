import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import React from 'react';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Home from './Home';

// import { Container } from './styles';

function MainRoutes() {
  return (
  <Router>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/register"><SignUp/></Route>
        <Route path="/login"><SignIn/></Route>
      </Switch>
  </Router>);
}

export default MainRoutes;