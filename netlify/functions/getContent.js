// Netlify function getContent.js

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer " + process.env.BEARER_TOKEN);
// myHeaders.append(
//   "Cookie",
//   'guest_id=v1%3A164000592726401717; guest_id_ads=v1%3A164000592726401717; guest_id_marketing=v1%3A164000592726401717; personalization_id="v1_A+KUMWJFAAPekutoirSInw=="'
// );

// var requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
// };

const axios = require("axios");

exports.handler = async function (event, context) {
  console.log(event);
  console.log(context);
  try {
    var config = {
      method: "get",
      url: "https://api.twitter.com/2/tweets/search/recent?query=(from%3AThePracticalDev%20OR%20from%3AfreeCodeCamp%20OR%20from%3Ahashnode%20OR%20from%3Agithub)&tweet.fields=id,text,public_metrics&expansions=author_id&user.fields=profile_image_url",
      headers: {
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAGHyXAEAAAAAltmqJo8WCX8C4hqhkclWq90BbLw%3D3FiUQCNsveE14heUKKqLSSsH2Stzm3d21HpbtaW51fJZSPLgK3",
      },
    };

    // const response = await fetch(
    //   "https://api.twitter.com/2/tweets/search/recent?query=(from%3AThePracticalDev%20OR%20from%3AfreeCodeCamp%20OR%20from%3Ahashnode%20OR%20from%3Agithub)&tweet.fields=id,text,public_metrics&expansions=author_id&user.fields=profile_image_url",
    //   {
    //     method: "GET",
    //     headers: {
    //       Authorization: "Bearer " + process.env.BEARER_TOKEN,
    //       Cookie:
    //         'guest_id=v1%3A164000592726401717; guest_id_ads=v1%3A164000592726401717; guest_id_marketing=v1%3A164000592726401717; personalization_id="v1_A+KUMWJFAAPekutoirSInw=="',
    //     },
    //     redirect: "follow",
    //   }
    // );
    // const response = await fetch(
    //   "https://api.twitter.com/2/tweets/search/recent?query=(from%3AThePracticalDev%20OR%20from%3AfreeCodeCamp%20OR%20from%3Ahashnode%20OR%20from%3Agithub)&tweet.fields=id,text,public_metrics&expansions=author_id&user.fields=profile_image_url",
    //   requestOptions
    // );
    const response = await axios(config);
    console.log(response.data);
    // const responseText = await response.text();
    // console.log(responseText);
    return {
      statusCode: 200,
      // body: JSON.stringify(responseText),
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.log("error", error);
    return { statusCode: 404, body: error.toString() };
  }
};
