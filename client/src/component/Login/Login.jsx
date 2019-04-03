import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Col, Card } from 'reactstrap';

import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <Col sm={5} className="card-design">
                    <Card>
                        <Form>
                            <FormGroup>
                                <div className="Form-group">
                                    <Label for="exampleInputEmail1" sm={6}>Email address</Label>
                                    <Col sm={6} className="card-design">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </Col>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <Label for="exampleInputPassword1">Password</Label>
                                    <Col sm={6} className="card-design">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </Col>
                                </div>
                                <div className="FormGroup form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <Label className="form-check-label" for="exampleCheck1">Check me out</Label>
                                </div>
                                <Button type="submit" className="btn btn-primary">Submit</Button>
                            </FormGroup>
                        </Form>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default Login;

