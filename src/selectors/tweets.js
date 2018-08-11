// Get visible legislation
  const tweetFilter = (tweets, { text, sortBy, startDate, endDate }) => {
    return tweets.filter((tweet) => {
      return tweet.handle.toLowerCase().includes(text.toLowerCase());
    })
  }

export default tweetFilter;