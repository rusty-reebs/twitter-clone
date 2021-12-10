// Main.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { sizes, devices } from "../styling";
import Header from "./Header";
import Footer from "./Footer";
import Tweet from "./Tweet";

import tweets from "./sample-tweets";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", "IBM Plex Sans", sans-serif;
  display: flex;
  flex-direction: column;
`;

const StyledComposeLink = styled(Link)`
  background-color: #1da1f2;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  position: fixed;
  right: 10%;
  bottom: 10%;
  text-align: center;
  line-height: 3rem;
  color: white;
  font-size: xx-large;
  text-decoration: none;
`;

const sampleUser = { name: "Rusty", username: "@rusty" };

const Home = (props) => {
  const [content, setContent] = useState(tweets);
  const [currentUser, setCurrentUser] = useState(sampleUser);

  useEffect(() => {
    document.title = "Home / Tweeter";
  });

  // useEffect(() => {
  // function to add newTweet to content
  // }, [newTweet]);

  let newTweet = {};
  const handleChange = (e) => {
    newTweet.name = currentUser.name;
    newTweet.username = currentUser.username;
    newTweet.content = e.target.value;
    console.log(newTweet);
    // setContent((prev) => {
    // prev.unshift(newTweet);
    // });
  };

  const handleSubmit = (e) => {
    console.log("submit!");
    e.preventDefault();
    // addTweet to db
  };

  return (
    <Container>
      <Header />
      {content.map((each) => {
        return (
          <Tweet
            key={each.id}
            name={each.name}
            username={each.username}
            time={each.time}
            content={each.content}
            comments={each.comments}
            retweets={each.retweets}
            likes={each.likes}
          />
        );
      })}
      <StyledComposeLink
        to={{
          pathname: "/compose",
          state: {
            handleChange: { handleChange },
            handleSubmit: { handleSubmit },
          },
        }}
      >
        +
      </StyledComposeLink>
      <Footer />
    </Container>
  );
};

export default Home;
