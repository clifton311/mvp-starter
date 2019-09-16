import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./App.jsx";
import Recipe from "./Recipe.jsx";
import Login from './Login.jsx'
import Register from './Register.jsx'




const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} exact />
      <Route exact path="/recipe/:id" component={Recipe} />
      <Route exact path="/login" component={Login} />

      <Route exact path='/register' component={Register} />

    </Switch>
  </BrowserRouter>
);

export default Router;