import { PostsDispatchTypes, PostsType, POSTS_FAIL, POSTS_LOADING, POSTS_SUCCESS } from "../action-types/PostActionTypes";

interface DefaultState {
    loading: boolean,
    posts?: PostsType
}

const defaultState: DefaultState = {
    loading: false
}

const postReducer = (state: DefaultState = defaultState, action: PostsDispatchTypes): DefaultState => {
    switch (action.type) {
        case POSTS_FAIL:
            return{
                loading: false
            }
        case POSTS_LOADING:
            return {
                loading: true
            }
        case POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload
            }
        default:
            return state;
    }
}

export default postReducer;