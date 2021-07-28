import { UserAPIType, UserDispatchTypes, USER_FAIL, USER_LOADING, USER_SUCCESS } from "../action-types/UserTypes";

interface IDefaultState {
    loading: boolean,
    user?: UserAPIType
}

const defaultState: IDefaultState = {
    loading: false
}

const userReducer = (
    state: IDefaultState = defaultState, 
    action: UserDispatchTypes
    ): IDefaultState => {
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