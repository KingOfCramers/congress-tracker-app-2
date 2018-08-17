// Reducers
const defaultTweet = [];
const tweetReducer = (state = defaultTweet, action) => {
  switch(action.type){
    case "ADD_TWEET" :
      console.log(action)
      return [...state, action.tweet ];
    case "REMOVE_TWEET" :
      return state.filter((tweet) => {
        return tweet.id !== action.tweet.id;
      });
    default :
      return state
  }
};

export default tweetReducer;