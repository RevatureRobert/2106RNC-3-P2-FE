export const SET_USER = 'set-user';
export const SIGN_OUT = 'sign-out';
export const SET_LOADING = 'set-loading';
export const SET_ERROR = 'set-error';
export const SET_SUCCESS = 'set-success';

export interface User {
    userName: string; // this is their email address
    password: string; // Presumably a hash of their actual password? - B
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    phoneNumber?: string;
    publicName?: string; // this is their public facing names
    nickName?: string;
    profile?: string;
}

export interface AuthState {
    user: User | null;
    authenticated: boolean;
    loading: boolean;
    error: string;
    success: string;
}

export interface LoginInfo {
    username: string;
    password: string;
}

export interface SignupInfo {
    username: string;
    password: string;
    attributes?: {
        first_name?: string;
        last_name?: string;
        birthday?: string;
    }
}

export interface SetUserAction {
    type: typeof SET_USER;
    payload: User
}

export interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean
}

export interface SignOutAction {
    type: typeof SIGN_OUT
}

export interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string
}

export interface SetSuccessAction {
    type: typeof SET_SUCCESS;
    payload: string;
}

export type AuthAction = 
    | SetUserAction
    | SetLoadingAction
    | SignOutAction
    | SetErrorAction
    | SetSuccessAction;

    