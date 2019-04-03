import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import axios from "axios";
import { Label } from 'reactstrap';

import './CreateUser.css'

class CreateUser extends Component {
    state = {
        brandname: "",
        username: "",
        email: "",
        password: "",
        confirm: "",
        phone_no: "",
        location: ""
    }
    save = (e) => {
        e.preventDefault();
        const formData = {
            title: this.state.title
        }
        console.log("submitting")
        this.addJob(formData);
    }

    onChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getJobs = (jobs) => {
        return () => {
            axios.get("http://localhost:5000/api/jobs")
                .then(res => {
                    jobs(res.data)
                })
                .catch(err => (err));
        }
    }

    addJob = (jobData) => {
        // console.log(jobData)
        return (
            axios.post("http://localhost:5000/api/jobs", jobData)
                .then(res => {
                })
                .catch(err => (err))
        )
    }


    render() {
        return (
            <>
                {/* <Form onSubmit={this.save} col-lg-3>
                    <FormGroup>
                        <Label for="brandname">Brandname</Label>
                        <Input
                            type="text" name="brandname" id="brandname" placeholder="Enter Brandname" 
                            onChange={this.onChanged}
                        />
                        <Label for="username">Username</Label>
                        <Input
                            type="text" name="username" id="username" placeholder="Enter Username"
                            onChange={this.onChanged}
                        />
                        <Label for="email">Email</Label>
                        <Input
                            type="email" name="email" id="email" placeholder="Enter Email"
                            onChange={this.onChanged}
                        />
                        <Label for="Phone">Phone</Label>
                        <Input
                            type="number" name="phone_no" id="phone_no" placeholder="Phone"
                            onChange={this.onChanged}
                        />
                        <Label for="Password">Password</Label>
                        <Input
                            type="password" name="password" id="password" placeholder="Password"
                            onChange={this.onChanged}
                        />
                        <Label for="Password">Confirm Password</Label>
                        <Input
                            type="password" name="password" id="password" placeholder="Retype Password"
                            onChange={this.onChanged}
                        />
                        <Label for="location">Location</Label>
                        <select className="select">
                            <option>Lagos</option>
                            <option>London</option>
                            <option>Yaba</option>
                            <option>Gwagwalada</option>
                        </select>
                         <Button color="danger">Add</Button>
                         {/* <Button type="submit">Add</Button> */}
                {/* </FormGroup> */}
                {/* </Form> */}

                <div className="container">
                    <div className="box">
                        <div className="header">
                            <h3>Login*</h3>
                            <h4>Register</h4>
                        </div>
                        <div className="forms">
                            <forms>
                                <div className="flex-forms">
                                    <div>
                                        <Label for="username"></Label>
                                        <p>UserName*</p>
                                        <input className="form-design" type="text" placeholder="User Name" />
                                    </div>
                                    <div>
                                        <Label for="email"></Label>
                                        <p>Email ID*</p>
                                        <input className="form-design" type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="flex-forms">
                                    <div>
                                        <Label for="Password"></Label>
                                        <p>Password*</p>
                                        <input className="form-design" type="password" placeholder="Password" />
                                    </div>
                                    <div>
                                        <Label for="Password"></Label>
                                        <p>Confirm-Password *</p>
                                        <input className="form-design" type="password" placeholder="password" />
                                    </div>
                                </div>
                            </forms>
                            <div className="info">
                                <h1>PERSONAL INFORMATION</h1>
                                <form>
                                    <div className="flex-forms">
                                        <div>
                                            <Label for="Phone"></Label>
                                            <p>Phone No*</p>
                                            <input className="form-design" type="text" placeholder="Phone No" />
                                        </div>
                                        <div>
                                            <div className="brandname">
                                            <Label for="brandname"></Label>
                                            <p>Brandname</p>
                                            <input className="form-design" form-design type="text" name="brandname" id="brandname" placeholder="Enter Brandname"
                                                onChange={this.onChanged}
                                            />
                                            </div>
                                            <div className="location">
                                            <Label for="location">Location</Label>
                                            <select className="select">
                                                <option>Lagos</option>
                                                <option>London</option>
                                                <option>Yaba</option>
                                                <option>Gwagwalada</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <input className="terms" type="checkbox" />I agree to the terms of use and privacy
                <div className="flex-forms">
                            <div className="login">
                                <p>Already have an account?</p>
                                <p>Click Here to <NavLink to="/login">Login</NavLink></p>
                            </div>
                            <div className="submit">
                                <button className="button">CREATE ACCOUNT</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}


export default CreateUser;