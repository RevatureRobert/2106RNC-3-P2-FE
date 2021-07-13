import {combineReducers} from "redux";
import {
    socialPostReducer,
    selectedPostReducer,
    addPostReducer
} from "./socialPostReducers";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import loginRegReducer from "./loginRegReducer";

export const reducers = combineReducers({
    allPosts: socialPostReducer,
    addPost: addPostReducer,
    getComments: socialPostReducer,
    posts: selectedPostReducer,
    login: loginRegReducer,
    error: errorReducer,
    loading: loadingReducer
});

export type RootState = ReturnType<typeof reducers>;
