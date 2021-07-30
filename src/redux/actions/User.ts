import axios from '../axiosConfig';
import { Dispatch } from 'redux';
import { UserAPIType, UserDispatchTypes, USER_FAIL, USER_LOADING, USER_SUCCESS } from '../action-types/UserTypes';

export const GetUser = (username: string) => async (dispatch: Dispatch <UserDispatchTypes>) => {
    try {
        dispatch({
            type: USER_LOADING
        })

        const res = await axios.get(`/getuser/${username}`);
        dispatch({
            type: USER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: USER_FAIL
        })
    }
}

export const PostUser = (params: UserAPIType) => async(dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({
            type: USER_LOADING
        })
        const body = {nickName: params.nickName};
        await axios.put(`/update`, body)
            .then((res) => {
                dispatch({
                    type: USER_SUCCESS,
                    payload: res.data
                })
            })
    } catch (err) {
        dispatch({
            type: USER_FAIL
        })
    }
}

export const CreateUser = (user: {}) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({
            type: USER_LOADING
        })

        await axios.post(`/add`, user)
            .then((res) => {
                dispatch({
                    type: USER_SUCCESS,
                    payload: res.data
                })
            })
    } catch (err) {
        dispatch({
            type: USER_FAIL
        })
    }
}

export const DeleteUser = (user: string) => async(dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({
            type: USER_LOADING
        })
        const body = {data: {username: user}};
        await axios.delete(`/delete/${user}`, body)
        .then((res) => {
            dispatch({
                type: USER_SUCCESS,
                payload: res.data
            })
        })
    } catch (err) {
        dispatch({
            type: USER_FAIL
        })
    }
}
