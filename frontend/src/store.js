import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { userListReducer } from "./reducers/userReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  userList: userListReducer,
});

const middleware = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

const initialState = {};

const store = createStore(reducer, initialState, enhancer);

export default store;
