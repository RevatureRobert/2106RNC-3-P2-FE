import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { RootReducer } from './reducers/RootReducer';

export const store = createStore(RootReducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof RootReducer>;