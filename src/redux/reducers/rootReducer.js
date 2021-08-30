import {FETCH_USERS} from "../actions/ActionsTypes";
import { PUSH_USER} from "../actions";

export const rootReducer = (state = {users: []}, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_USERS:
            console.log('case 1', action.payload);
            return {...state, users: [...action.payload]};
        case PUSH_USER:
            return {...state, users: [...state.users, action.payload]};
        default:
            return state;
    }
}