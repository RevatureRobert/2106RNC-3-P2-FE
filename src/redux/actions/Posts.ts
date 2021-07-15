import axios from '../axiosConfig';
import { Dispatch } from 'redux';
import { PostsDispatchTypes, POSTS_FAIL, POSTS_LOADING, POSTS_SUCCESS } from '../action-types/PostActionTypes';

export const GetAllPosts = () => async (dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
        dispatch({
            type: POSTS_LOADING
        })
        const res = await axios.get('/posts')
        dispatch({
            type: POSTS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POSTS_FAIL
        })
    }
}


export const GetPost = (postId: string) => async(dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
        dispatch({
            type: POSTS_LOADING
        })
        const res = await axios.get(`/posts/${postId}`);
        dispatch({
            type: POSTS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({ 
            type: POSTS_FAIL
        })
    }
}


export const GetUserPosts = () => async(dispatch: Dispatch<PostsDispatchTypes>) => {
    try{
        dispatch({
            type:POSTS_LOADING
        })
        const res = await axios.get(window.location.pathname);
        dispatch({
            type: POSTS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POSTS_FAIL
        })
    }
}

export const AddPost = (post: {}) => async(dispatch: Dispatch<PostsDispatchTypes>) => {
    try{
        dispatch({
            type: POSTS_LOADING
        })
        await axios.post('/posts', post).then(function (res) {
                    dispatch({
                        type: POSTS_SUCCESS,
                        payload: res.data
                    })
                })
    } catch (err) {
        dispatch({
            type: POSTS_FAIL
        })
    }
}

export const DeletePost = (postId: string) => async(dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
        dispatch({
            type: POSTS_LOADING
        })
        await axios.delete(`/posts/${postId}`).then(function (res) {
            dispatch({
                type: POSTS_SUCCESS,
                payload: res.data
            })
        })
    } catch (err) {
        dispatch({
            type: POSTS_FAIL
        })
    }
}