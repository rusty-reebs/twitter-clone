// sample-tweets.js

const imageJeck = require("../img/jeck.jpeg");
const imageRusty = require("../img/rusty.jpg");

const tweets = [
  {
    id: 1,
    avatar: imageJeck.default,
    name: "jeck",
    username: "@jeck⚡️",
    time: "1m",
    content: "just setting up my twttr",
    comments: 101,
    original: true,
    retweets: "1.5K",
    likes: "10K",
  },
  {
    id: 2,
    avatar: imageRusty.default,
    name: "Rusty",
    username: "@rusty",
    time: "2h",
    content:
      "Welcome to Tweeter! You can like and re-tweet the tweets in the feed as well as compose your own.",
    comments: "253",
    original: true,
    retweets: "1K",
    likes: "5K",
  },
  {
    id: 3,
    avatar: imageRusty.default,
    name: "Rusty",
    username: "@rusty",
    time: "2h",
    content:
      "Written in ⚛️React with styled components. The posts below are retrieved from the Twitter API.",
    comments: "78",
    original: true,
    retweets: 610,
    likes: 999,
  },
];

export default tweets;
