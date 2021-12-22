// Home.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import getTwitterContent from "./getTwitterContent";
import { processedTweets } from "./getTwitterContent";
import Header from "./Header";
import Footer from "./Footer";
import Tweet from "./Tweet";
import Compose from "./Compose";
import Modal from "./Modal";

import pinnedTweets from "./pinned-tweets";

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

let myTweets = [];

const Home = (props) => {
  const [content, setContent] = useState(pinnedTweets);
  const [toggleCompose, setToggleCompose] = useState(false);
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [showMyTweets, setShowMyTweets] = useState(false);

  let navigate = useNavigate();

  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    document.title = "Home / Tweeter";
    if (loading) return;
    console.log(user);
    if (!user) return navigate("/");
    if (error) console.error(error);
    if (!user.isAnonymous) logInUser();
    if (user.isAnonymous) {
      setUserName("@guest");
      setDisplayName("Guest");
    }
    // getTwitterContent();
  }, [user, loading]);

  const fetchUserDb = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const querySnapshot = await getDocs(q);
      let currentUser;
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        currentUser = doc.data();
      });
      return currentUser;
    } catch (error) {
      console.log(error);
    }
  };

  const logInUser = async () => {
    const currentUser = await fetchUserDb();
    console.log(currentUser);
    setUserName(currentUser.userName);
    setDisplayName(currentUser.displayName);
  };

  const handleLogout = () => {
    console.log("logout!");
    auth.signOut();
    navigate("/");
  };

  let newTweet = {};
  const handleChange = (e) => {
    newTweet.displayName = displayName;
    newTweet.userName = userName;
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

  const handleModal = () => {
    setToggleModal(!toggleModal);
  };

  const handleMyTweets = async () => {
    if (user.isAnonymous) {
      toast.error("You're a guest, you don't have any saved tweets.😥");
    } else {
      const currentUser = await fetchUserDb();
      console.log(currentUser.tweets);
      myTweets = currentUser.tweets;
      console.log("myTweets", myTweets);
      setShowMyTweets(true);
      document.title = "My Tweets / Tweeter";
    }
  };

  const closeMyTweets = () => {
    setShowMyTweets(showMyTweets ? false : null);
  };

  const handleRetweet = (id) => {
    if (!showMyTweets) {
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
    } else return;
  };

  const handleLike = (id) => {
    if (!showMyTweets) {
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
    } else return;
  };

  return (
    <Container>
      <ToastContainer />
      {!toggleCompose ? (
        <>
          <Header
            displayName={displayName}
            handleLogout={handleLogout}
            toggleModal={toggleModal}
            handleModal={handleModal}
          />
          <StyledFeed>
            {showMyTweets ? (
              <>
                {myTweets
                  .map((each, i) => {
                    return (
                      <Tweet
                        key={i}
                        displayName={displayName}
                        userName={userName}
                        content={each}
                        handleLike={handleLike}
                        handleRetweet={handleRetweet}
                      />
                    );
                  })
                  .reverse()}
              </>
            ) : (
              <>
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
                {processedTweets.map((each) => {
                  return (
                    <Tweet
                      // tweet={each} ? can use this to access all props instead?
                      key={each.index + 100}
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
              </>
            )}
            <StyledComposeButton onClick={handleCompose}>+</StyledComposeButton>
          </StyledFeed>

          <Footer closeMyTweets={closeMyTweets} />
          {toggleModal ? (
            <Modal
              displayName={displayName}
              userName={userName}
              setToggleModal={setToggleModal}
              handleLogout={handleLogout}
              handleMyTweets={handleMyTweets}
            />
          ) : null}
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
