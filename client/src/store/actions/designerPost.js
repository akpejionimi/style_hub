import axios from "../../utils/axios-base";
import * as types from "./types";

export const loading = () => {
	return {
		type: types.LOADING
	};
};

export const getPostsSuccess = posts => {
	return {
		type: types.GET_POSTS_SUCCESS,
		posts
	};
};

export const errorOccured = error => {
	return {
		type: types.ERROR_OCCURED,
		error
	};
};

// This is possible because of the redux-thunk middleware
export const getRecipes = () => {
	return dispatch => {
		dispatch(loading());
		axios
			.get("/post")
			.then(res => {
				dispatch(getPostsSuccess(res.data));
			})
			.catch(err => dispatch(errorOccured(err)));
	};
};

export const getSinglePost = postId => {
	return dispatch => {
		dispatch(loading());
		axios
			.get(`/post/${postId}`)
			.then(res => {
				dispatch({ type: types.GET_SINGLE_POST_SUCCESS, post: res.data });
			})
			.catch(err => dispatch(errorOccured(err)));
	};
};

export const addPostInit = () => {
	return {
		type: types.ADD_POST_INIT
	};
};

// This is possible because of the redux-thunk middleware
export const addPost = postData => {
	return (dispatch, getState) => {
		dispatch(loading());
		const token = getState().auth.token;

		// Headers
		const config = {
			headers: {}
		};

		// If token, add to headers
		if (token) {
			config.headers["x-access-token"] = token;
		}
		axios
			.post("/post", postData, config)
			.then(res => {
				return dispatch({ type: types.ADD_POST_SUCCESS });
			})
			.then(() => {
				dispatch(addPostInit());
			})
			.catch(err => dispatch(errorOccured(err.response.data)));
	};
};