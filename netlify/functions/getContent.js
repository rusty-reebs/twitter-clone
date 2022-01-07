// Netlify function getContent.js

const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    var config = {
      method: "get",
      url: "https://api.twitter.com/2/tweets/search/recent?query=(from%3AThePracticalDev%20OR%20from%3AfreeCodeCamp%20OR%20from%3Ahashnode%20OR%20from%3Agithub)&tweet.fields=id,text,public_metrics&expansions=author_id&user.fields=profile_image_url",
      headers: {
        Authorization: "Bearer " + process.env.BEARER_TOKEN,
        "Access-Control-Allow-Origin": "*",
      },
    };

    const response = await axios(config);
    console.log(response.data);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.log("error", error);
    return { statusCode: 404, body: error.toString() };
  }
};
