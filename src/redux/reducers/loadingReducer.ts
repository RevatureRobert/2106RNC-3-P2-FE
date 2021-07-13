import {LoadingActionType} from "../actions/loadingAction";
import {ActionType} from "../action-types";

const initState = {
    isLoadingAuth: false
};

const loadingReducer = (state = initState, action: LoadingActionType) => {
    switch (action.type) {
        case ActionType.SET_AUTH_LOADING:
            return {
                ...state,
                isLoadingAuth: action.payload
            };
        default:
            return state;
    }
};

export default loadingReducer;
