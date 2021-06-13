import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const userReducer = (state, action) => {
    switch(action.type) {
        default:
            return{...state}    
    }
}

const rootReducer = combineReducers({
    games: gamesReducer,
});

export default rootReducer;