// Main.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const sampleUser = {
  name: "Rusty",
  username: "@rusty",
  avatar: require("../img/rusty.jpg"),
};

const Home = (props) => {
  const [content, setContent] = useState(tweets);
  const [currentUser, setCurrentUser] = useState(sampleUser);
  const [toggleCompose, setToggleCompose] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth token");
    if (authToken) {
      navigate("/home");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    document.title = "Home / Tweeter";
  }, [content]);

  const handleLogout = () => {
    sessionStorage.removeItem("Auth token");
    navigate("/");
  };

  let newTweet = {};
  const handleChange = (e) => {
    newTweet.avatar = currentUser.avatar;
    newTweet.name = currentUser.name;
    newTweet.username = currentUser.username;
    newTweet.time = "1m";
    newTweet.content = e.target.value;
    newTweet.comments = "";
    newTweet.original = true;
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
    let foundTweet = content.find((tweet) => tweet.id === id);
    let index = content.findIndex((tweet) => tweet.id === id);
    let currentTweet = JSON.parse(JSON.stringify(foundTweet)); // make a deep copy
    let copyContent = [...content]; // make a shallow copy
    if (
      typeof currentTweet.retweets === "string" &&
      currentTweet.retweets === ""
    ) {
      currentTweet.id = currentTweet.id + "R";
      currentTweet.retweets = 1;
      copyContent[index].retweets = 1;
    } else if (typeof currentTweet.retweets === "string") {
      currentTweet.id = currentTweet.id + "R";
    } else {
      currentTweet.id = currentTweet.id + "R";
      currentTweet.retweets += 1;
      copyContent[index].retweets += 1;
    }
    currentTweet.retweeted = true;
    currentTweet.original = false;
    copyContent[index].retweeted = true;
    setContent([...copyContent]);
    setContent([currentTweet, ...content]);
    //! go to top of feed
  };

  const handleLike = (id) => {
    // let currentTweetO = content.find(tweet => tweet.id === id);
    // let currentTweetR = content.find(tweet => tweet.id === id + "R");
    // let indexTweetO = content.findIndex((tweet) => tweet.id === id);
    // let indexTweetR = content.findIndex((tweet) => tweet.id === id + "R");

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
          <Header avatar={currentUser.avatar} />
          <StyledFeed>
            {content.map((each) => {
              return (
                <Tweet
                  // tweet={each} ? can use this to access all props instead?
                  key={each.id}
                  id={each.id}
                  avatar={each.avatar}
                  name={each.name}
                  username={each.username}
                  time={each.time}
                  content={each.content}
                  comments={each.comments}
                  retweets={each.retweets}
                  retweeted={each.retweeted}
                  original={each.original}
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
          avatar={currentUser.avatar}
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
