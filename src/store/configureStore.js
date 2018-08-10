import { createStore, combineReducers } from "redux";

// Import reducers
import tweetReducer from "../reducers/tweets";
import legislationReducer from "../reducers/legislation";
import casesReducer from "../reducers/cases";
import filtersReducer from "../reducers/filter";

// Store creation
export default () => {
    const store = createStore(
      combineReducers({
        tweets: tweetReducer,
        cases: casesReducer,
        legislation: legislationReducer,
        filters: filtersReducer
      })
    );

    return store;
};