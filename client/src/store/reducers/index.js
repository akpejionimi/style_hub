import { combineReducers} from "redux";

import authreducer from "./auth"
import postreducer from "./designerpost"


const rootReducer = combineReducers({
    auth: authreducer,
    post: postreducer
});


export default rootReducer;