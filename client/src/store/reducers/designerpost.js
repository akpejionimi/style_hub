import * as types from "../actions/types";

const initialState = {
	Posts: [],
	post: null,
	isLoading: false,
	postCreated: false,
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_POSTS_SUCCESS:
			return {
				...state,
				Posts: action.Posts,
				isLoading: false
			};
		case types.GET_SINGLE_POST_SUCCESS:
			return {
				...state,
				post: action.post,
				isLoading: false
			};
			
		case types.ADD_POST_INIT:
			return {
				...state,
				postCreated: false,
				error: null
			};
		case types.ADD_POST_SUCCESS:
			return {
				...state,
				isLoading: false,
				postCreated: true,
				error: null
			};
		case types.LOADING:
			return {
				...state,
				isLoading: true
			};
		case types.ERROR_OCCURED:
			return {
				...state,
				isLoading: false,
				error: action.error
			};
		default:
			return state;
	}
};

export default reducer;