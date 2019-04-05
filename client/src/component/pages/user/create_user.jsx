import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import axios from "axios";
import { Label, Button, Form, FormGroup } from 'reactstrap';

import './CreateUser.css'

class CreateUser extends Component {
    state = {
        brandname: null,
        username: null,
        email: null,
        password: null,
        confirm_password: null,
        phone_no: null,
        location: null
    }
    save = (e) => {
        e.preventDefault();
        const formData = {
            brandname: this.state.brandname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            phone_no: this.state.phone_no,
            location: this.state.location
        }
        console.log("submitting")
        this.addUser(formData);
    }

    onChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log([e.target.name]);
    }
    getUser = (users) => {
        return () => {
            axios.get("localhost:5000/api/")
                .then(res => {
                    users(res.data)
                })
                .catch(err => (err));
        }
    }

    addUser = (userData) => {
        // console.log(jobData)
        return (
            axios.post("http://localhost:5000/", userData)
                .then(res => {
                })
                .catch(err => (err))
        )
    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="box">
                        <div className="header">
                            <h3>Login*</h3>
                            <h4>Register</h4>
                        </div>
                        <div className="form">
                            <Form onSubmit={this.save} >
                                <FormGroup>
                                    <div className="flex-forms">
                                        <div>
                                            <Label for="username"></Label>
                                            <p>UserName*</p>
                                            <input onChange={this.onChanged} className="form-design" type="text" name="username"
                                                placeholder="User Name" />
                                        </div>
                                        <div>
                                            <Label for="email"></Label>
                                            <p>Email ID*</p>
                                            <input onChange={this.onChanged} className="form-design" type="text" name="email"
                                                placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="flex-forms">
                                        <div>
                                            <Label for="Password"></Label>
                                            <p>Password*</p>
                                            <input onChange={this.onChanged} className="form-design" type="password" name="password"
                                                placeholder="Password" />
                                        </div>
                                        <div>
                                            <Label for="Password"></Label>
                                            <p>Confirm-Password *</p>
                                            <input onChange={this.onChanged} className="form-design" type="password"
                                                name="password" placeholder="password" />
                                        </div>
                                    </div>

                                    <div className="info">
                                        <h1>PERSONAL INFORMATION</h1>

                                        <div className="flex-forms">
                                            <div>
                                                <Label for="Phone"></Label>
                                                <p>Phone No*</p>
                                                <input onChange={this.onChanged} className="form-design" type="text"
                                                    name="phone_no" placeholder="Phone No" />
                                            </div>
                                            <div>
                                                <div className="brandname">
                                                    <Label for="brandname"></Label>
                                                    <p>Brandname</p>
                                                    <input className="form-design"
                                                        form-design type="text" name="brandname" id="brandname" placeholder="Enter Brandname"
                                                        onChange={this.onChanged}
                                                    />
                                                </div>
                                                <div className="location">
                                                    <Label for="location" name="location">Location</Label>
                                                    <select className="select">
                                                        <option>Lagos</option>
                                                        <option>London</option>
                                                        <option>Yaba</option>
                                                        <option>Gwagwalada</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <input className="terms" type="checkbox" />I agree to the terms of use and privacy */}
                                        <div className="flex-forms">
                                        <div className="login">
                                            <p>Already have an account?</p>
                                            <p>Click Here to <NavLink to="/login">Login</NavLink></p>
                                        </div>
                                        <div className="submit">
                                            <Button className="button">CREATE ACCOUNT</Button>
                                        </div>
                                    </div>
                                </FormGroup>
                            </Form>
                        </div>
                        </div>
                    </div>

            </>
                )
            }
        }
        
        
export default CreateUser;