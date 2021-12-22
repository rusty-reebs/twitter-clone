// App.js

//TODO fix modal close window listener
//TODO likes/retweets counts on retweets
//TODO populate feed with API
//TODO write tests

import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { app, db } from "./firebase/firebase.config";
import { doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import Start from "./Start";
import Form from "./components/Form";
import Home from "./components/Home";
// import Compose from "./components/Compose";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    height: 100%;
  }
  height: 100vh;
  width: 100vw;
  min-height: 100%;
  max-height: 100%;
  font-family: "Roboto", "IBM Plex Sans", sans-serif;
`;

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");

  let navigate = useNavigate();

  const handleAction = async (action) => {
    const authentication = getAuth(app);
    if (action === "register") {
      try {
        const response = await createUserWithEmailAndPassword(
          authentication,
          email,
          password
        );
        const user = response.user;
        await setDoc(
          doc(db, "users", "@" + userName),
          {
            uid: user.uid,
            displayName: displayName,
            userName: "@" + userName,
            tweets: [],
          }
          // { merge: true }
        );
      } catch (error) {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already exists");
        }
      }
      navigate("/home");
    }

    if (action === "login") {
      try {
        await signInWithEmailAndPassword(authentication, email, password);
        navigate("/home");
      } catch (error) {
        if (error.code === "auth/wrong-password") {
          toast.error("Please check password");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("User not found");
        }
      }
    }

    if (action === "guest") {
      try {
        await signInAnonymously(authentication);
        navigate("/home");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Start handleAction={() => handleAction("guest")} />}
        />
        <Route
          path="/login"
          element={
            <Form
              title="Log In"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction("login")}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Form
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              setUserName={setUserName}
              setDisplayName={setDisplayName}
              renderNameInputs={true}
              handleAction={() => handleAction("register")}
            />
          }
        />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/compose" element={<Compose />} /> */}
      </Routes>
    </div>
  );
};

export default App;
