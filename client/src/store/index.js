import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// This is our redux store.
// A store is where the state of our app is being keep.
// A store acts as the single source of truth for our app.
// Only Reducers updates our store so we pass in the reducer
// as an arg when creating the store.

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

// NB: redux-thunk is a middleware.
// Middleware affects what happen in between an action and a reducer.
// Actions are the only thing that can be dispatched by default.
// With redux-thunk, you can dispatch a function which in turn can make
// an async request and dispatch the relevant actions which then gets to the reducer.

export default store;