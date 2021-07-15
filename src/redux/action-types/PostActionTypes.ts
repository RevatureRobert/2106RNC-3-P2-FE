export const POSTS_LOADING = 'posts-loading';
export const POSTS_FAIL = 'posts-fail';
export const POSTS_SUCCESS = 'posts-success';

export type PostsType = [{
    username: string;
    postId?: string; //unique id tied to each post/comment/like/dislike
    postText: string;
    parentPostId: string; //used to identify parent post for comments
    like?: boolean;
    dislike?: boolean;
    post_date_time: string;
    mainPost?: number;
}]

export type Posts = {
    username: string,
    postText: string,
}

export interface PostsLoading {
    type: typeof POSTS_LOADING
}

export interface PostsFail {
    type: typeof POSTS_FAIL
}

export interface PostsSuccess {
    type: typeof POSTS_SUCCESS,
    payload: PostsType
}

export type PostsDispatchTypes = 
    | PostsLoading
    | PostsFail
    | PostsSuccess;