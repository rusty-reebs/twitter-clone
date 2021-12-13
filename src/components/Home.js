// Main.js

import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { sizes, devices } from "../styling";
import Header from "./Header";
import Footer from "./Footer";
import Tweet from "./Tweet";
import Compose from "./Compose";

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

const StyledComposeButton = styled.div`
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

const StyledFeed = styled.div`
  max-height: calc(100vh - 8vh - 6vh);
  width: 100vw;
  overflow-y: auto;
`;

const sampleUser = { name: "Rusty", username: "@rusty" };

const Home = (props) => {
  const [content, setContent] = useState(tweets);
  const [currentUser, setCurrentUser] = useState(sampleUser);
  const [toggleCompose, setToggleCompose] = useState(false);

  useEffect(() => {
    document.title = "Home / Tweeter";
  }, [content]);

  let newTweet = {};
  const handleChange = (e) => {
    newTweet.name = currentUser.name;
    newTweet.username = currentUser.username;
    newTweet.time = "1m";
    newTweet.content = e.target.value;
    newTweet.comments = "";
    newTweet.retweets = "";
    newTweet.likes = "";
    newTweet.id = content.length + 1;
  };

  const handleSubmit = (e) => {
    console.log(newTweet);
    e.preventDefault();
    const updateContent = [newTweet, ...content];
    setContent(updateContent);
    handleCompose();
    console.log(content);
    // addTweet to db
  };

  const handleCompose = () => {
    setToggleCompose(!toggleCompose);
  };

  const handleRetweet = (id) => {
    let currentTweet = content.find((tweet) => tweet.id === id);
    if (
      typeof currentTweet.retweets === "string" &&
      currentTweet.retweets === ""
    ) {
      currentTweet.retweets = 1;
      currentTweet.retweeted = true;
    } else if (typeof currentTweet.retweets === "string") {
      currentTweet.retweeted = true;
    } else {
      currentTweet.retweets += 1;
      currentTweet.retweeted = true;
    }
    setContent([currentTweet, ...content]);
  };

  const handleLike = (id) => {
    let currentTweet = content.find((tweet) => tweet.id === id);
    let index = content.findIndex((tweet) => tweet.id === id);
    if (typeof currentTweet.likes === "string" && currentTweet.likes === "") {
      currentTweet.likes = 1;
      currentTweet.liked = true;
    } else if (typeof currentTweet.likes === "string") {
      currentTweet.liked = true;
    } else {
      currentTweet.likes += 1;
      currentTweet.liked = true;
    }
    let currentContent = [...content];
    currentContent.splice(index, 1, currentTweet);
    setContent(currentContent);
  };

  return (
    <Container>
      {!toggleCompose ? (
        <>
          <Header />
          <StyledFeed>
            {content.map((each) => {
              return (
                <Tweet
                  key={each.id}
                  id={each.id}
                  name={each.name}
                  username={each.username}
                  time={each.time}
                  content={each.content}
                  comments={each.comments}
                  retweets={each.retweets}
                  retweeted={each.retweeted}
                  handleRetweet={handleRetweet}
                  likes={each.likes}
                  liked={each.liked}
                  handleLike={handleLike}
                />
              );
            })}
            <StyledComposeButton onClick={handleCompose}>+</StyledComposeButton>
          </StyledFeed>
          <Footer />
        </>
      ) : (
        <Compose
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCompose={handleCompose}
          value={newTweet.content}
        />
      )}
    </Container>
  );
};

export default Home;
