import {IPost} from "../../models/socialPostModel";

export enum PostAction {
    // All you groovy post related actions
    SET_POST = "SET_POST",
    ADD_POST = "ADD_POST",
    REMOVE_SELECTED_POST = "REMOVE_POST",
    EDIT_POST = "EDIT_POST",
    DELETE_POST = "DELETE_POST",
    SELECT_POST = "SELECT_POST",
    LIKE_POST = "LIKE_POST",
    DISLIKE_POST = "DISLIKE_POST",
    REPORT_POST = "REPORT_POST",
    GET_COMMENTS = "GET_COMMENTS"
}

export interface IPostActions {
    type: PostAction;
    payload: {posts: IPost};
}

export interface IAppActions extends IPostActions {
    type: PostAction;
    payload: {posts: IPost};
}

export const setPost = (posts: IPost) =>
    <const>{
        type: PostAction.SET_POST,
        payload: posts
    };

export const getcomments = (posts: IPost) =>
    <const>{
        type: PostAction.GET_COMMENTS,
        payload: posts
    };

export const addPost = (posts: IPost) =>
    <const>{
        type: PostAction.ADD_POST,
        payload: posts
    };

export const selectedPost = (postId: string) => {
    return {
        type: PostAction.SELECT_POST,
        payload: postId
    };
};

export const removeSelectedPost = () => {
    return {
        type: PostAction.REMOVE_SELECTED_POST
    };
};
