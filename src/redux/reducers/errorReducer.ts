import {ActionType} from "../action-types";
import {IErrorState} from "../types/types";
import {ErrorActionType} from "../actions/errorAction";

const initState: IErrorState = {
    authError: null
};

const errorReducer = (state = initState, action: ErrorActionType) => {
    switch (action.type) {
        case ActionType.SET_AUTH_ERR:
            return {
                ...state,
                authError: action.payload
            };
        case ActionType.CLEAR_AUTH_ERR:
            return {
                ...state,
                authError: null
            };
        default:
            return state;
    }
};

export default errorReducer;
