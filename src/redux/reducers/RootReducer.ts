import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import postReducer from './PostsReducer';
import userReducer from './UserReducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
    posts: postReducer,
    user: userReducer,
});

export type ApplicationState = ReturnType<typeof RootReducer>;

export { RootReducer };