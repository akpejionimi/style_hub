import { combineReducers} from "redux";

import authreducer from "./auth"


const rootReducer = combineReducers({
    auth: authreducer
});


export default rootReducer;