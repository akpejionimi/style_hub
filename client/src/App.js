import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./component/Navbar/Navbar"
import CreateUser from './component/user/create_user'
import Login from "./component/Login/Login"
// import { Container } from "reactstrap";
import { Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <Route path="/sign-up" component={CreateUser} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
