export const USER_LOADING = 'user-loading';
export const USER_FAIL = 'user-fail';
export const USER_SUCCESS = 'user-success';

export interface UserAPI {
    username: string;
    password: string;
}

export type UserAPIType = {
    username: string;
    nickName: string;

}

export interface UserLoading {
    type: typeof USER_LOADING
}

export interface UserFail {
    type: typeof USER_FAIL
}

export interface UserSuccess {
    type: typeof USER_SUCCESS
    payload: UserAPIType
}


export type UserDispatchTypes = 
    | UserLoading
    | UserFail
    | UserSuccess;