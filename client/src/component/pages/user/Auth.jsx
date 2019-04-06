import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Alert
} from "reactstrap";

import { auth, toggleAuth } from "../../../store/actions/auth";

class Auth extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    passwordMatched: false
  };

  onChanged = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    let formData;
    if (this.props.isLogin) {
      formData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.onAuth(formData);
    } else {
      formData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      this.props.onAuth(formData);
    }
  };

  render() {
    const {isLogin, isAuth, error } = this.props;
    return (
      <Container>
        {isAuth && <Redirect to="/" />}
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Card>
            {!isLogin ? 
                  ( <CardHeader tag="h2">Register</CardHeader>) 
                  : 
                  (<CardHeader tag="h2">Login</CardHeader>
                  )}
              
              <CardBody>
                {error && <Alert color="danger">{this.props.error.msg}</Alert>}
                <Form onSubmit={this.submitForm} action="POST">
                {!isLogin && (
                    <FormGroup>
                      <Label for="name">BrandName</Label>
                      <Input
                        type="text"
                        name="brandname"
                        id="brandname"
                        placeholder="BrandName"
                        onChange={this.onChanged}
                      />
                    </FormGroup>
                  )}{!isLogin && (
                    <FormGroup>
                      <Label for="name">Username</Label>
                      <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="UserName"
                        onChange={this.onChanged}
                      />
                    </FormGroup>
                  )}
                 
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      onChange={this.onChanged}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={this.onChanged}
                    />
                  </FormGroup>
                  {!isLogin && (
                    <FormGroup>
                      <Label for="password2">Confirm Password</Label>
                      <Input
                        type="password"
                        name="password2"
                        id="password2"
                        placeholder="Confirm Password"
                        onChange={this.onChanged}
                        invalid={this.state.password !== this.state.password2}
                      />
                      <FormFeedback>Password doesnt match</FormFeedback>
                    </FormGroup>
                  )}
                   {!isLogin && (
                    <FormGroup>
                      <Label for="name">Phone No</Label>
                      <Input
                        type="number"
                        name="phone_no"
                        id="phone_no"
                        placeholder="Phone No"
                        onChange={this.onChanged}
                      />
                    </FormGroup>
                  )}
                   {!isLogin && (
                    <FormGroup>
                      <Label for="name">Location</Label>
                      <Input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Enter Location"
                        onChange={this.onChanged}
                      />
                    </FormGroup>
                  )}
                  {!isLogin ? 
                  (<Button color="primary">Register</Button>) 
                  : 
                  (<Button color="primary">Login</Button>
                  )}
                  
                </Form>
              </CardBody>
              <CardFooter>
                <span
                  onClick={this.props.onToggleAuth}
                  style={{ cursor: "pointer" }}
                >
                  {isLogin
                    ? "Create an Account"
                    : "Already have an Account? Login Here!"}
                </span>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  isLoading: state.auth.isLoading,
  isAuth: state.auth.token !== null,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  onAuth: formData => dispatch(auth(formData)),
  onToggleAuth: () => dispatch(toggleAuth())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
