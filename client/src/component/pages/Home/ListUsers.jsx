import React, { Component } from 'react';
import { ListGroupItem, Card, Col } from "reactstrap";
import axios from "axios";

class ListUsers extends Component {
    state = {
        users: [
            // {
            //     id: 9,
            //     brandname: "Zuks",
            //     username: "ZuksZulo",
            //     email: "Zuks@yahoo.com",
            //     password: "makanaki",
            //     confirm_password: "makanaki",
            //     phone_no: "080908",
            //     location: "gidi"

            // },
            // {
            //     id: 10,
            //     brandname: "Zuksma",
            //     username: "ZuksmaZulo",
            //     email: "Zuksma@yahoo.com",
            //     password: "makanakii",
            //     confirm_password: "makanakii",
            //     phone_no: "08090899",
            //     location: "gidi"

            // }
        ]
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/user')
            .then(res => {
                console.log(res)
                let updatedUsers = res.data;
                this.setState({
                    users: updatedUsers
                })
            })
            .catch(err => console.log("Oops Error: " + err))
    }
    render() {
        return (
            <>
                < Col sm={5} className="card-design">
                    <Card >
                        {this.state.users.map((user) => (
                            <ListGroupItem key={user.id}>{user.brandname}
                                <div>{user.username} </div>
                                <div>{user.email} </div>
                                <div>{user.phone_no} </div>
                                <div>{user.location} </div></ListGroupItem>
                        ))}
                    </Card>
                </ Col>
            </>
        )
    }
}

export default ListUsers;