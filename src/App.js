// App.js

import React, { useEffect, useState } from "react";
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
} from "firebase/auth";
import Start from "./Start";
import Form from "./components/common/Form";
import Home from "./components/Home";
import Compose from "./components/Compose";

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
  // const [currentUser, setCurrentUser] = useState({});

  let navigate = useNavigate();

  // useEffect(() => {
  //   let authToken = sessionStorage.getItem("Auth token");
  //   if (authToken) {
  //     navigate("/home");
  //   }
  // }, []);

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
          doc(db, "users", userName),
          { uid: user.uid, displayName: displayName, userName: userName },
          { merge: true }
        );
      } catch (error) {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already exists");
        }
      }
      navigate("/home");
    }
    // const handleAction = (action) => {
    // const authentication = getAuth(app);
    // if (action === "register") {
    //   createUserWithEmailAndPassword(authentication, email, password)
    //     .then((response) => {
    //       console.log(response);
    //       let uid = response.user.uid;
    //       addUserToDb(uid, userName, displayName);
    //       navigate("/home");
    //     })
    //     .catch((error) => {
    //       if (error.code === "auth/email-already-in-use") {
    //         toast.error("Email already exists");
    //       }
    //     });
    // }
    if (action === "login") {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth token",
            response._tokenResponse.refreshToken
          );
          // getUserFromDb();
          // should be in useEffect hook somewhere?
          // setCurrentUser
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check email");
          }
        });
    }
  };

  // const addUserToDb = (uid, userName, displayName) => {
  //   const newUser = doc(db, "users", userName);
  //   setDoc(
  //     newUser,
  //     { uid: uid, userName: userName, displayName: displayName },
  //     { merge: true }
  //   ).catch((error) => {
  //     console.error(error);
  //   });
  // };

  return (
    <div>
      <ToastContainer />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
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
        <Route path="/compose" element={<Compose />} />
      </Routes>
    </div>
  );
};

export default App;