// getTwitterContent.js

import myHeaders from "./tokens";

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const getTwitterContent = () => {
  fetch(
    "/tweets/search/recent?query=(from%3AThePracticalDev%20OR%20from%3AfreeCodeCamp%20OR%20from%3Ahashnode%20OR%20from%3Agithub)&tweet.fields=id,text,public_metrics&expansions=author_id&user.fields=profile_image_url",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const raw = {
  data: [
    {
      public_metrics: {
        retweet_count: 2,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
      author_id: "3957817872",
      id: "1473220459260899328",
      text: "RT @sandro_vol: Exciting news!  🎉\n\nI am joining @Hashnode as a full-stack engineer in January 😍\n\nI am really excited working for a high-gro…",
    },
    {
      public_metrics: {
        retweet_count: 4,
        reply_count: 0,
        like_count: 7,
        quote_count: 0,
      },
      author_id: "2735246778",
      id: "1473220197804920833",
      text: "I'd like to show you a couple of Tailwind CSS buttons that I've built together with my friends for the Flowbite library.\n\n{ author: @themesberg } #DEVCommunity\nhttps://t.co/Ux5hhgK9wt",
    },
    {
      public_metrics: {
        retweet_count: 1,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
      author_id: "3957817872",
      id: "1473212035823378432",
      text: "RT @IrinaTheNerd: I'm getting serious, y'all: \nIt can't rain all the time (Mental health and winter sads)\n{ by @irinaTheNerd } from @hashno…",
    },
    {
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 6,
        quote_count: 0,
      },
      author_id: "2735246778",
      id: "1473210635102175233",
      text: "In my experience, the display property raises a lot of questions for novice developers. I created a live cheat sheet to fix this issue!\n\n#DEVCommunity\nhttps://t.co/F1u30kUNQ4",
    },
    {
      public_metrics: {
        retweet_count: 7,
        reply_count: 1,
        like_count: 24,
        quote_count: 0,
      },
      author_id: "2735246778",
      id: "1473197299849388032",
      text: "Developers and engineering managers should cultivate a continuous learning mindset: constantly develop new skills, as well as integrate learning into the workflow.\n\n{ author: @VectorlyHQ } #DEVCommunity\nhttps://t.co/53dWP6hn8R",
    },
    {
      public_metrics: {
        retweet_count: 0,
        reply_count: 1,
        like_count: 12,
        quote_count: 0,
      },
      author_id: "3957817872",
      id: "1473193910881165312",
      text: "Congratulations everyone ✨\n\nIf you didn't see your name on the list, keep writing/reading and next year, your name will stand next to these incredible writers/readers.",
    },
    {
      public_metrics: {
        retweet_count: 2,
        reply_count: 6,
        like_count: 24,
        quote_count: 1,
      },
      author_id: "3957817872",
      id: "1473193139343138818",
      text: "@tapasadhikary @lo_victoria2666 @miguendes @denicmarko @ayushi7rawat @dannysteenman @horn_travis @polilluminato @oliverjumpertz @akshaymarch7 @DailyDevTips1 @miatemma @mcsee1 @VladPasca5 @MarcinWosinek @myogeshchavan97 @unclebigbay143 @askRodney @RitzaCo @jsdisco @nicolas_frankel @FavouriteJome1 @andrewbaisden @saviomartin7 @WankhadeRutik @olanetsoft @lalitcodes ✍ Top Writer - 2021 Tech Awards\n\n@lo_victoria2666\n@unclebigbay143\n@tapasadhikary\n@avneesh0612\n@saviomartin7\n@ayushi7rawat\n@chandrajidev\n@coffeestasia\n@olanetsoft\n@SuhailKakar",
    },
    {
      public_metrics: {
        retweet_count: 0,
        reply_count: 3,
        like_count: 11,
        quote_count: 0,
      },
      author_id: "3957817872",
      id: "1473193049551421444",
      text: "@tapasadhikary @lo_victoria2666 @miguendes @denicmarko @ayushi7rawat @dannysteenman @horn_travis @polilluminato @oliverjumpertz @akshaymarch7 @DailyDevTips1 @miatemma @mcsee1 @VladPasca5 @MarcinWosinek @myogeshchavan97 @unclebigbay143 @askRodney @RitzaCo @jsdisco @nicolas_frankel 📖 Top Reader - 2021 Tech Awards\n\n@FavouriteJome1\nVivek Tiwari\n@andrewbaisden\n@saviomartin7\n@WankhadeRutik\n@lo_victoria2666\n@tapasadhikary\n@myogeshchavan97\n@olanetsoft\n@lalitcodes",
    },
    {
      public_metrics: {
        retweet_count: 1,
        reply_count: 2,
        like_count: 11,
        quote_count: 0,
      },
      author_id: "3957817872",
      id: "1473192869674561538",
      text: "@tapasadhikary @lo_victoria2666 @miguendes @denicmarko @ayushi7rawat @dannysteenman @horn_travis @polilluminato @oliverjumpertz @akshaymarch7 @DailyDevTips1 @miatemma @mcsee1 @VladPasca5 @MarcinWosinek @myogeshchavan97 @unclebigbay143 🔎 Top Researcher - 2021 Tech Awards\n\n@DailyDevTips1\nHimanshu Sheth\nTomasz Węgrzanowski\n@myogeshchavan97\n@miatemma\n@askRodney\n@RitzaCo\n@unclebigbay143\n@jsdisco\n@nicolas_frankel",
    },
    {
      public_metrics: {
        retweet_count: 0,
        reply_count: 2,
        like_count: 10,
        quote_count: 0,
      },
      author_id: "3957817872",
      id: "1473192732571090946",
      text: "@tapasadhikary @lo_victoria2666 @miguendes @denicmarko @ayushi7rawat @dannysteenman @horn_travis @polilluminato @oliverjumpertz @akshaymarch7 🌟 Most Prolific Writer - 2021 Tech Awards\n\n@DailyDevTips1\nTomasz Węgrzanowski\n@miatemma\nHaorong Li\n@mcsee1\n@VladPasca5\n@MarcinWosinek\n@myogeshchavan97\n@unclebigbay143\nRammina",
    },
  ],
  includes: {
    users: [
      {
        id: "3957817872",
        name: "Hashnode",
        profile_image_url:
          "https://pbs.twimg.com/profile_images/1468094435321810948/LelFxTd6_normal.jpg",
        username: "hashnode",
      },
      {
        id: "2735246778",
        name: "DEV Community 👩‍💻👨‍💻",
        profile_image_url:
          "https://pbs.twimg.com/profile_images/1389789795065335809/A8H1fuQb_normal.jpg",
        username: "ThePracticalDev",
      },
    ],
  },
  meta: {
    newest_id: "1473220459260899328",
    oldest_id: "1473192732571090946",
    result_count: 10,
    next_token: "b26v89c19zqg8o3fpe16lkzzu4oktqemnapsdgna81vnh",
  },
};

let tweetsArray = [];
let authorsArray = [];

const twitterTweetFactory = (
  retweets,
  comments,
  likes,
  author_id,
  content,
  index
) => {
  return { retweets, comments, likes, author_id, content, index };
};

const authorFactory = (userName, displayName, author_id, avatar) => {
  return { userName, displayName, author_id, avatar };
};

const processTweets = () => {
  raw.data.forEach((tweet, index) => {
    let obj = twitterTweetFactory(
      tweet.public_metrics.retweet_count,
      tweet.public_metrics.reply_count,
      tweet.public_metrics.like_count,
      tweet.author_id,
      tweet.text,
      index
    );
    tweetsArray.push(obj);
  });
  console.log(tweetsArray);
};

const processAuthors = () => {
  raw["includes"].users.forEach((author) => {
    let obj = authorFactory(
      "@" + author.username,
      author.name,
      author.id,
      author.profile_image_url
    );
    authorsArray.push(obj);
  });
  console.log(authorsArray);
};

let processedTweets = [];
const tweetWithAuthor = () => {
  let matchingAuthor = [];
  authorsArray.forEach((author) => {
    matchingAuthor = tweetsArray
      .filter((tweet) => tweet.author_id === author.author_id)
      .map((tweet) => {
        tweet.userName = author.userName;
        tweet.displayName = author.displayName;
        tweet.avatar = author.avatar;
        return tweet;
      });
    console.log(matchingAuthor);
    processedTweets = [...processedTweets, ...matchingAuthor];
  });
  processedTweets.sort((prev, next) => {
    return prev.index - next.index;
  });
};

processTweets();
processAuthors();
tweetWithAuthor();
console.log(processedTweets);

export default getTwitterContent;
export { processedTweets };
