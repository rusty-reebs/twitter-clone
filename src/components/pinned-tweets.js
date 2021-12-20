// pinned-tweets.js

const imageJeck = require("../img/jeck.jpeg");
const imageRusty = require("../img/rusty.jpg");

const pinnedTweets = [
  {
    id: 1,
    avatar: imageJeck.default,
    displayName: "jeck",
    userName: "@jeck⚡️",
    time: "📌",
    content: "just setting up my twttr",
    comments: 101,
    original: true,
    retweets: "1.5K",
    likes: "10K",
  },
  {
    id: 2,
    avatar: imageRusty.default,
    displayName: "Rusty",
    userName: "@rusty",
    time: "📌",
    content:
      "Welcome to Tweeter! You can ❤️ like and re-tweet the tweets in the feed as well as compose your own.",
    comments: "253",
    original: true,
    retweets: "1K",
    likes: "5K",
  },
  {
    id: 3,
    avatar: imageRusty.default,
    displayName: "Rusty",
    userName: "@rusty",
    time: "📌",
    content:
      "If you're logged in, tap your avatar icon to see your tweets in the database.",
    comments: "21",
    original: true,
    retweets: 88,
    likes: 483,
  },
  {
    id: 4,
    avatar: imageRusty.default,
    displayName: "Rusty",
    userName: "@rusty",
    time: "📌",
    content:
      "Written in ⚛️React with styled components. Backend hosted on Firebase. The tweets 👇 below are retrieved via the Twitter API.",
    comments: "78",
    original: true,
    retweets: 619,
    likes: 962,
  },
];

export default pinnedTweets;
