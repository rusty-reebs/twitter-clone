// getTwitterContent.js
// "Bearer " + process.env.REACT_APP_BEARER_TOKEN

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer AAAAAAAAAAAAAAAAAAAAAGHyXAEAAAAAKDlLp9ZlhIBRPDfEImsiOyHzPgQ%3D8zKfoOSrCb0SX7XpRrMG3Kle6eb4cazEBKcKWcEstbQBpbvc0l"
);
myHeaders.append(
  "Cookie",
  'guest_id=v1%3A164000592726401717; guest_id_ads=v1%3A164000592726401717; guest_id_marketing=v1%3A164000592726401717; personalization_id="v1_A+KUMWJFAAPekutoirSInw=="'
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const getTwitterContent = async () => {
  try {
    const response = await fetch(
      "https://api.twitter.com/2/tweets/search/recent?query=(from%3AThePracticalDev%20OR%20from%3AfreeCodeCamp%20OR%20from%3Ahashnode%20OR%20from%3Agithub)&tweet.fields=id,text,public_metrics&expansions=author_id&user.fields=profile_image_url",
      requestOptions
    );
    const responseText = await response.text();
    return responseText;
  } catch (error) {
    console.log("error", error);
  }
};

const deliverTwitterContent = async () => {
  tweetsArray = [];
  authorsArray = [];
  try {
    const response = await getTwitterContent();
    console.log("raw data", response);
    processTweets(response);
    processAuthors(response);
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
  response["data"].forEach((tweet, index) => {
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

// below is an example response object fetched via the Twitter API
const exampleResponse = {
  data: [
    {
      author_id: "2735246778",
      text: "I hope this helps show the potential value of wrapping modules from shared libraries.\n\n{ author: @michaelmangial1 } #DEVCommunity\nhttps://t.co/krdMes9GO5",
      id: "1473585101812420613",
      public_metrics: {
        retweet_count: 2,
        reply_count: 0,
        like_count: 5,
        quote_count: 0,
      },
    },
    {
      author_id: "2735246778",
      text: "It's time to create our first table with Prisma. Are you ready? Then let's go 💪\n\n{ author: @puppo92 } #DEVCommunity\nhttps://t.co/Og7sUB1E1F",
      id: "1473570506939023364",
      public_metrics: {
        retweet_count: 3,
        reply_count: 0,
        like_count: 8,
        quote_count: 0,
      },
    },
    {
      author_id: "3957817872",
      text: "@surajincloud Thank you for the kind words Suraj!",
      id: "1473564626067628032",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 1,
        quote_count: 0,
      },
    },
    {
      author_id: "2735246778",
      text: "CSS variables are a very cool innovation within your styles. They make it very easy to not only write reusable styles, but update them or expand on them further down the road.\n\n{ author: @iam_timsmith } #DEVCommunity\nhttps://t.co/YULyw4fbUe",
      id: "1473558176876437504",
      public_metrics: {
        retweet_count: 3,
        reply_count: 1,
        like_count: 16,
        quote_count: 0,
      },
    },
    {
      author_id: "2735246778",
      text: "I'll show you how to leverage the powerful Cloudinary API to create dynamic Open Graph images and banners for your website or blog.\n\n{ author: @BraydonCoyer } #DEVCommunity\nhttps://t.co/TScBQBFwWR",
      id: "1473557169064796161",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 10,
        quote_count: 0,
      },
    },
    {
      author_id: "3957817872",
      text: "RT @sabinthedev: My recent article on @hashnode just got featured! \n\nIf you're interested in learning about the basics of @prisma and @type…",
      id: "1473551969453105153",
      public_metrics: {
        retweet_count: 6,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
    },
    {
      author_id: "2735246778",
      text: "Parent selectors have browser support! Let's play around and see what they can do.\n\n{ author: @fraktalisman } #DEVCommunity\nhttps://t.co/UgHYiiswM0",
      id: "1473546349727596558",
      public_metrics: {
        retweet_count: 3,
        reply_count: 0,
        like_count: 12,
        quote_count: 0,
      },
    },
    {
      author_id: "3957817872",
      text: "You don't want to miss the details! 🔥\n\nKeep reading at @iamaponte's post and feel free to add your tips. 👇\n\nhttps://t.co/A0TOP3DwOh",
      id: "1473543358253514753",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 4,
        quote_count: 0,
      },
    },
    {
      author_id: "3957817872",
      text: "10. Do some management training 💪\n\nSeek out knowledge because someone else probably already figured out how to do that thing you're trying to do. This applies to management as much as it does to coding.\n\nA small bit of training goes a long way. We don't know what we don't know.",
      id: "1473543355208544264",
      public_metrics: {
        retweet_count: 0,
        reply_count: 1,
        like_count: 0,
        quote_count: 0,
      },
    },
    {
      author_id: "3957817872",
      text: "9. Your team's success is your success 🏆\n\nThe focus should be on elevating your team and getting them the W's (wins). All of YOUR primary W's should actually be their's.\n\nIf your team is winning, you're winning.\n\nThe saying is \"We the best\". Not \"I'm the best\"",
      id: "1473543352394129411",
      public_metrics: {
        retweet_count: 0,
        reply_count: 1,
        like_count: 0,
        quote_count: 0,
      },
    },
  ],
  includes: {
    users: [
      {
        username: "ThePracticalDev",
        profile_image_url:
          "https://pbs.twimg.com/profile_images/1389789795065335809/A8H1fuQb_normal.jpg",
        id: "2735246778",
        name: "DEV Community 👩‍💻👨‍💻",
      },
      {
        username: "hashnode",
        profile_image_url:
          "https://pbs.twimg.com/profile_images/1468094435321810948/LelFxTd6_normal.jpg",
        id: "3957817872",
        name: "Hashnode",
      },
    ],
  },
  meta: {
    newest_id: "1473585101812420613",
    oldest_id: "1473543352394129411",
    result_count: 10,
    next_token: "b26v89c19zqg8o3fpe16ltheitf86uneqt3t6s3kz7a0t",
  },
};
