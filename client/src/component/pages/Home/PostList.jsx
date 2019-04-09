import React, { Component } from 'react';
import { ListGroupItem, Card, Col } from "reactstrap";
import axios from "axios";

class PostList extends Component {
    state = {
        Posts: [
        ]
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/post')
            .then(res => {
                console.log(res)
                let updatedposts = res.data;
                this.setState({
                    Posts: updatedposts
                })
            })
            .catch(err => console.log("Oops Error: " + err))
    }
    render() {
        return (
            <>
                < Col sm={5} className="card-design">
                    <Card >
                        {this.state.Posts.map((post) => (
                            <ListGroupItem key={post.id}>{post.content}
                                </ListGroupItem>
                        ))}
                    </Card>
                </ Col>
            </>
        )
    }
}

export default PostList;