import { UserAPIType, UserDispatchTypes, USER_FAIL, USER_LOADING, USER_SUCCESS } from "../action-types/UserTypes";

interface DefaultState {
    loading: boolean,
    user?: UserAPIType
}

const defaultState: DefaultState = {
    loading: false
}

const userReducer = (state: DefaultState = defaultState, action: UserDispatchTypes): DefaultState => {
    switch (action.type){
        case USER_FAIL:
            return {
                loading: false,
            }
        case USER_LOADING:
            return {
                loading: true,
            }
        case USER_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;