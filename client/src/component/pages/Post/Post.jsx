import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
	Button,
	Form,
	FormGroup,
    Card,
    CardHeader,
    CardBody,
    Input,
	Spinner,
	Alert,
	Row,
	Col,
	Label
} from "reactstrap";

import { addPost, addPostInit} from "../../../store/actions/designerPost";

class AddPost extends Component {
	state = {
		content: "",
		// images: ""
	};

	save = e => {
		e.preventDefault();
		const formData = {
			content: this.state.content,
			// images: this.state.images
		
		};
		// Sets the "jobCreated" state to true on success,
		// this to redirect to home because we're using
		// the <Redirect /> component.
		this.props.onAddPost(JSON.stringify(formData));
	};

	onChanged = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<>
				<Row>
					<Col md={{ size: 6, offset: 3 }}>
						{this.props.postCreated && <Redirect to="/" />}
                        <Card style={{marginTop:"10px"}}>
                            <CardHeader tag="h2">Add Post</CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.save}>
							{this.props.error && (
								<Alert color="danger">{this.props.error.msg}</Alert>
                            )}
                            {/* <FormGroup> */}
                                {/* <Label for="Add Post">post photo</Label> */}
                                    {/* <Input type="file" name="images" id="imageUrl" />
							</FormGroup> */}
							  <FormGroup>
                                <Label for="Design category">Select Category</Label>
                                <Input type="select" name="categoryId" id="categoryId" onChange={this.onChanged}>
                                     <option value="">Select Category</option>
                                     <option value="1">kids wear</option>
                                     <option value="2">Coperate Wears</option>
                                </Input>
                            </FormGroup><FormGroup></FormGroup>
			
                            <FormGroup>
								{/* <Label for="recipe description">Description</Label> */}
								<Input
                                    type="textarea"
                                    rows="10"
									name="content"
									id="content"
									placeholder="Add a post here"
									onChange={this.onChanged}
								/>
							</FormGroup>

							{this.props.isLoading ? (
								<Spinner color="danger" />
							) : (
								<Button color="danger">Add</Button>
							)}
						</Form>
                        </CardBody>
                        </Card>
					</Col>
				</Row>
			</>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.post.isLoading,
	postCreated: state.post.postCreated,
    error: state.post.error
});

const mapDispatchToProps = dispatch => ({
	onAddPostInit: () => dispatch(addPostInit()),
	onAddPost: postData => dispatch(addPost(postData))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddPost);