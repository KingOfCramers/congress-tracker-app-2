import { createStore, combineReducers } from "redux";
import tweetReducer from "../reducers/tweets";
import legislationReducer from "../reducers/legislation";

export default () => {
  // Store creation
    const store = createStore(
      combineReducers({
        tweets: tweetReducer,
        legislation: legislationReducer
      })
    );

    return store;
};