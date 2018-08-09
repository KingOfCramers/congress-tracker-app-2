import uuid from "uuid";
// Action generators
export const addTweet = ({ handle = "" } = {}) => ({
  type: "ADD_TWEET",
  tweet: {
    id: uuid(),
    handle
  }
});

export const removeTweet = ({ id } = {}) => ({
  type: "REMOVE_TWEET",
  tweet: {
    id
  }
});