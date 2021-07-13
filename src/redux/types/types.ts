import {ActionType} from "../action-types";

export interface IUser {
    username: string;
    password: string;
}

export interface Login {
    username: string;
    password: string;
}

export interface SignUp {
    username: string;
    password: string;
    birthday: string;
    phone: string;
    first_name: string;
    last_name: string;
}

export interface ILogin {
    username: IUser | null;
    authenticated: boolean;
    loading: false;
    setError: string;
    success: string;
}

export interface SetUser {
    type: typeof ActionType.SET_USERNAME;
    payload: IUser;
}

export interface SetLoading {
    type: typeof ActionType.SET_LOADING;
    payload: boolean;
}

export interface Logout {
    type: typeof ActionType.LOGOUT_START;
}

export interface SetError {
    type: typeof ActionType.SET_ERROR;
    payload: string;
}

export interface SetSuccess {
    type: typeof ActionType.LOGIN_SUCCESS;
    payload: string;
}

export interface UserAPI {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    birthday: string;
    phone: string;
}

export type UserAPIType = {
    username: string;
};
export interface UserLoading {
    type: typeof ActionType.USER_LOADING;
}

export interface UserFail {
    type: typeof ActionType.USER_FAIL;
}

export interface UserSuccess {
    type: typeof ActionType.USER_SUCCESS;
    payload: UserAPIType;
}

export type Authenticate =
    | SetUser
    | SetLoading
    | Logout
    | SetError
    | SetSuccess;

export type UserDispatch = UserLoading | UserFail | UserSuccess;
