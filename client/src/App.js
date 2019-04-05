import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./component/pages/Navbar/Navbar"
import CreateUser from './component/pages/user/create_user'
import Login from "./component/pages/Login/Login"
import ListUser from './component/pages/Home/ListUsers'
// import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <Switch>
        <Route path="/sign-up" component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/" component={ListUser} />
        </Switch>
      </div>
    );
  }
}

export default App;
