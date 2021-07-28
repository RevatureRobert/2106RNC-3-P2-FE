import { ThunkAction } from 'redux-thunk';
import { RootStore } from '../store';
import { AuthAction, LoginInfo, SET_USER, User, SignupInfo, SET_ERROR, SIGN_OUT, SET_SUCCESS, SET_LOADING } from '../action-types/UserActionTypes';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';

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

// user login
export const login = (
    data: LoginInfo,
    onError: () => void
) : ThunkAction<void, RootStore, null, AuthAction> => {
    return async (dispatch) => {
        try {
            const res: CognitoUser = await Auth.signIn(data.username, data.password);
            if (res) {
                const userInfo: User = {
                    userName: res.getUsername(),
                    password: data.password,
                };
                dispatch({
                    type: SET_USER,
                    payload: userInfo
                })
            }
        } catch (err) {
            onError();
            dispatch(setError(err.message));
            console.log(err);
        }
    }
}

// user sign up
export const signup = (
    data: SignupInfo,
    onError: () => void
) => {
    return async () => {
        try {
            const res = await Auth.signUp(
                data.username,
                data.password,
                data.first_name,
                data.last_name,
                data.birthday
                );
            console.log(res.user);
        } catch (err) {
            onError();
        }
    }
}

// user logout
export const logout = () : ThunkAction<void, RootStore, null, AuthAction> => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            await Auth.signOut();
            dispatch({
                type: SIGN_OUT
            });
        } catch (err) {
            dispatch(setLoading(false));
        }
    }
}