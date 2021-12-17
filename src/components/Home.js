// Home.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { app, db } from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  where,
  query,
  arrayUnion,
} from "firebase/firestore";
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

const Home = (props) => {
  const [content, setContent] = useState(tweets);
  const [toggleCompose, setToggleCompose] = useState(false);
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");

  let navigate = useNavigate();

  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    document.title = "Home / Tweeter";
    if (loading) return;
    console.log(user);
    if (!user) return navigate("/");
    if (error) console.error(error);
    if (!user.isAnonymous) fetchUser();
    if (user.isAnonymous) {
      setUserName("guest");
      setDisplayName("Guest");
    }
  }, [user, loading]);

  const fetchUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const querySnapshot = await getDocs(q);
      let currentUser;
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        currentUser = doc.data();
      });
      setUserName(currentUser.userName);
      setDisplayName(currentUser.displayName);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    console.log("logout!");
    auth.signOut();
    navigate("/");
  };

  let newTweet = {};
  const handleChange = (e) => {
    newTweet.displayName = displayName;
    newTweet.userName = "@" + userName;
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
    if (!user.isAnonymous) {
      addTweetToDb(newTweet.content);
    }
  };

  const addTweetToDb = async (content) => {
    try {
      await setDoc(
        doc(db, "users", userName),
        { tweets: arrayUnion(content) },
        { merge: true }
      );
    } catch (error) {
      console.error(error);
    }
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
          <Header displayName={displayName} handleLogout={handleLogout} />
          <StyledFeed>
            {content.map((each) => {
              return (
                <Tweet
                  // tweet={each} ? can use this to access all props instead?
                  key={each.id}
                  id={each.id}
                  avatar={each.avatar}
                  displayName={each.displayName}
                  userName={each.userName}
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
          displayName={displayName}
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
