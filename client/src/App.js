import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./component/pages/Navbar/Navbar"
import Login from "./component/pages/Login/Login"
import ListUser from './component/pages/Home/ListUsers'
import Auth from './component/pages/user/Auth.jsx'
import AddPost from "./component/pages/Post/Post";
// import { Container } from "reactstrap";
import { connect } from "react-redux";
import Logout from "./component/Logout"
import { Route, Switch } from "react-router-dom";
import './App.css';

import {authAutoLogin } from "./store/actions/auth"

class App extends Component {
  componentDidMount = () => {
    this.props.onAutoLogin();
  };
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/login" component={Login} />
        <Route path="/" component={ListUser} />
        <Route render={() => <h2>Not Found</h2>} />
      </Switch>
    );
    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/add-post" component={AddPost} />
          <Route path="/" component={ListUser} />
          <Route render={() => <h2>Not Found</h2>} />
        </Switch>
      );
    }
    return (
      <div className="App">
        <AppNavbar isAuth={this.props.isAuth}/>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => ({
	isAuth: state.auth.token !== null
});

const mapDispatchToProps = dispatch => ({
	onAutoLogin: () => dispatch(authAutoLogin())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
