// getTwitterContent.js

const deliverTwitterContent = async () => {
  tweetsArray = [];
  authorsArray = [];
  try {
    const response = await fetch("/.netlify/functions/getContent");
    const responseText = await response.text();
    const parsedResponse = JSON.parse(responseText);
    processTweets(parsedResponse);
    processAuthors(parsedResponse);
    return processTweetWithAuthor();
  } catch (error) {
    console.log(error);
  }
};

const twitterTweetFactory = (
  id,
  retweets,
  comments,
  likes,
  author_id,
  content,
  original,
  index
) => {
  return { id, retweets, comments, likes, author_id, content, original, index };
};

const authorFactory = (userName, displayName, author_id, avatar) => {
  return { userName, displayName, author_id, avatar };
};

let tweetsArray = [];
const processTweets = (response) => {
  response.data.forEach((tweet, index) => {
    let obj = twitterTweetFactory(
      index + 1000,
      tweet.public_metrics.retweet_count,
      tweet.public_metrics.reply_count,
      tweet.public_metrics.like_count,
      tweet.author_id,
      tweet.text,
      true,
      index
    );
    tweetsArray.push(obj);
  });
};

let authorsArray = [];
const processAuthors = (response) => {
  response["includes"].users.forEach((author) => {
    let obj = authorFactory(
      "@" + author.username,
      author.name,
      author.id,
      author.profile_image_url
    );
    authorsArray.push(obj);
  });
};

const processTweetWithAuthor = () => {
  let matchingAuthor = [];
  let processedTweets = [];
  authorsArray.forEach((author) => {
    matchingAuthor = tweetsArray
      .filter((tweet) => tweet.author_id === author.author_id)
      .map((tweet) => {
        tweet.userName = author.userName;
        tweet.displayName = author.displayName;
        tweet.avatar = author.avatar;
        return tweet;
      });
    processedTweets = [...processedTweets, ...matchingAuthor];
  });
  processedTweets.sort((prev, next) => {
    return prev.index - next.index;
  });
  return processedTweets;
};

export default deliverTwitterContent;
