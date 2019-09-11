import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.jsx";
import Recipe from "./Recipe.jsx";
import Login from './Login.jsx'
import Register from './Register.jsx'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Router;