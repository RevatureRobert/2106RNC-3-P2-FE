import { ThunkAction } from 'redux-thunk';
import { RootStore } from '../store';
import { AuthAction, LoginInfo, SET_USER, User, SignupInfo, SET_ERROR, SIGN_OUT, SET_SUCCESS, SET_LOADING } from '../action-types/UserActionTypes';
import { Dispatch } from 'react';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { onFinishCommand, string } from 'yargs';

export const setError = (
    msg: string
) : ThunkAction<void, RootStore, null, AuthAction> => {
    return (dispatch) => {
        dispatch({ 
            type: SET_ERROR,
            payload: msg
        });
    }
}

export const setSuccess = (
    msg: string
) : ThunkAction<void, RootStore, null, AuthAction> => {
    return (dispatch) => {
        dispatch({
            type: SET_SUCCESS,
            payload: msg
        })
    }
}

export const setLoading = (
    value: boolean
) : ThunkAction<void, RootStore, null, AuthAction> => {
    return (dispatch) => {
        dispatch({
            type: SET_LOADING,
            payload: value
        })
    }
}

export const login = (
    data: LoginInfo,
    onError: () => void
) : ThunkAction<void, RootStore, null, AuthAction> => {
    return async (dispatch) => {
        try {
            const res: CognitoUser = await Auth.login(data.username, data.password);
            if (res) {
                const userInfo: User = {
                    username: res.getUserName();
                    password: data.password;
                }
                dispatch({
                    type: SET_USER,
                    payload: userInfo
                })
            } catch (err) {
                onError();
                dispatch(setError(err.message));
                console.log(err);
            }
        }
    }
}


export const signup = (
    data: SignupInfo,
    onError: () => void
) : ThunkAction<void, RootStore, null, AuthAction> => {
    return async (dispatch) => {
        try {
            const res = await Auth.login(data.username, data.password);
            if(res.user) {
                const userInfo: User = {
                    username: data.username,
                    password: data.password
                };
                dispatch({
                    type: SET_USER,
                    payload: userInfo
                })
            } catch (err) {
                onError();
                dispatch({
                    type: SET_ERROR,
                    payload: err
                })
            }
        }
    }
}

export const logout = () : ThunkAction<void, RootStore, null, AuthAction> => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            await Auth.logout();
            dispatch({
                type: SIGN_OUT
            });
        } catch (err) {
            dispatch(setLoading(false));
        }
    }
}