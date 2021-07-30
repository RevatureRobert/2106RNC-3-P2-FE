import axios from '../axiosConfig';
import { Dispatch } from 'redux';
import { PostsDispatchTypes, POSTS_FAIL, POSTS_LOADING, POSTS_SUCCESS } from '../action-types/PostActionTypes';

export const GetAllPosts = () => async (dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
        dispatch({
            type: POSTS_LOADING
        })
        const res = await axios.get('https://thesocialjusticewarriors.com/api/home/post/getall')
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


export const GetComments = (parentPostId: string) => async(dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
        dispatch({
            type: POSTS_LOADING
        })
        const res = await axios.get(`/post/getcomments/${parentPostId}`);
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

export const AddPost = (post: {}) => {
    try{
        await axios.post('/addpost', post).catch((error) => console.log(error));
    } catch (err) {
        return 'Error in posting: ' + err;
    }
}

export const DeletePost = (postId: string) => {
    try {
        await axios.delete(`/post/delete/${postId}`);
    } catch (err) {
        return 'Error in deleting: ' + err;
    }
}