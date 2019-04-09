import React, { Component } from 'react';
import PostList from "./PostList"
import { ListGroupItem, Card, Col } from "reactstrap";
import axios from "axios";

class ListUsers extends Component {
    state = {
        users: [
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
                <PostList/>
                < Col sm={5} className="card-design">
                    <Card >
                        {this.state.users.map((user) => (
                            <ListGroupItem key={user.id}>{user.brandname}
                                <div>{user.username} </div>
                                <div>{user.email} </div>
                                <div>{user.phoneNo} </div>
                                <div>{user.location} </div></ListGroupItem>
                        ))}
                    </Card>
                </ Col>

            </>
        )
    }
}

export default ListUsers;