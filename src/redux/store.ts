import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./reducers/index";
import thunk from "redux-thunk";

const w: any = window;
const composeEnhancers =
    typeof window === "object" && w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
);

export const store = createStore(reducers, {}, enhancer);

export type RootStore = ReturnType<typeof reducers>;
