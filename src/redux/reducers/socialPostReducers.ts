import {IPost} from "../../models/socialPostModel";
import {PostAction} from "../actions/socialPostActions";

export interface IAppState {
    posts: IPost[];
}

const initialState: IAppState = {
    posts: []
};

export const socialPostReducer = (
    state = initialState,
    action: {type: any; payload: any}
) => {
    switch (action.type) {
        case PostAction.SET_POST:
            return {...state, posts: action.payload};
        default:
            return state;
    }
};

export const addPostReducer = (
    state = initialState,
    action: {type: any; payload: any}
) => {
    switch (action.type) {
        case PostAction.ADD_POST:
            return {...state, posts: action.payload};
        default:
            return state;
    }
};

export const getCommentsReducer = (
    state = initialState,
    action: {type: any; payload: any}
) => {
    switch (action.type) {
        case PostAction.GET_COMMENTS:
            return {...state, posts: action.payload};
        default:
            return state;
    }
};

export const selectedPostReducer = (
    state = {},
    action: {type: any; payload: any}
) => {
    switch (action.type) {
        case PostAction.SELECT_POST:
            return {...state, ...action.payload};
        case PostAction.REMOVE_SELECTED_POST:
            return {};
        default:
            return state;
    }
};
