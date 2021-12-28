// getTwitterContent.js
// "Bearer " + process.env.REACT_APP_BEARER_TOKEN

// var myHeaders = new Headers();
// myHeaders.append(
//   "Authorization",
//   "Bearer AAAAAAAAAAAAAAAAAAAAAGHyXAEAAAAAKDlLp9ZlhIBRPDfEImsiOyHzPgQ%3D8zKfoOSrCb0SX7XpRrMG3Kle6eb4cazEBKcKWcEstbQBpbvc0l"
// );
// myHeaders.append(
//   "Cookie",
//   'guest_id=v1%3A164000592726401717; guest_id_ads=v1%3A164000592726401717; guest_id_marketing=v1%3A164000592726401717; personalization_id="v1_A+KUMWJFAAPekutoirSInw=="'
// );

// var requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
// };

// const getTwitterContent = async () => {
//   try {
//     const response = await fetch(
//       "/2/tweets/search/recent?query=(from%3AThePracticalDev%20OR%20from%3AfreeCodeCamp%20OR%20from%3Ahashnode%20OR%20from%3Agithub)&tweet.fields=id,text,public_metrics&expansions=author_id&user.fields=profile_image_url",
//       requestOptions
//     );
//     const responseText = await response.text();
//     return responseText;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

const deliverTwitterContent = async () => {
  tweetsArray = [];
  authorsArray = [];
  try {
    // const response = await getTwitterContent();
    const response = await fetch("../../netlify/functions/getContent");
    // console.log(response);
    // const responseText = await response.text();
    // console.log(responseText);
    // const parsedResponse = JSON.parse(response.body);
    const parsedResponse = JSON.parse(response.body);
    console.log(parsedResponse);
    processTweets(parsedResponse);
    processAuthors(parsedResponse);
    return processTweetWithAuthor();
  } catch (error) {
    console.log("oh no", error);
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
