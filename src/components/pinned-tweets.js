// pinned-tweets.js

const imageJeck = require("../img/jeck.jpeg");
const imageRusty = require("../img/rusty.jpg");

const pinnedTweets = [
  {
    id: 100,
    avatar: imageJeck.default,
    displayName: "jeck",
    userName: "@jeckâ¡ï¸",
    content: "ð just setting up my tweetr",
    comments: 101,
    original: true,
    retweets: "1.5K",
    likes: "10K",
  },
  {
    id: 101,
    avatar: imageRusty.default,
    displayName: "Rusty",
    userName: "@rusty",
    content:
      "ð Welcome to Tweeter! You can â¤ï¸ like and re-tweet the tweets in the feed as well as compose your own.",
    comments: "253",
    original: true,
    retweets: "1K",
    likes: "5K",
  },
  {
    id: 102,
    avatar: imageRusty.default,
    displayName: "Rusty",
    userName: "@rusty",
    content:
      "ð If you're logged in, tap your avatar icon to see your tweets in the database.",
    comments: "21",
    original: true,
    retweets: 88,
    likes: 483,
  },
  {
    id: 103,
    avatar: imageRusty.default,
    displayName: "Rusty",
    userName: "@rusty",
    content:
      "ð Written in âï¸ React with Styled Components. Database hosted on Firebase. Serverless backend with Netlify Functions. The tweets ð below are retrieved via the Twitter API.",
    comments: "78",
    original: true,
    retweets: 619,
    likes: 962,
  },
];

export default pinnedTweets;
