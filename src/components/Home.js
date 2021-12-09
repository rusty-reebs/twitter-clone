// Main.js

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { sizes, devices } from "../styling";
import Header from "./Header";
import Footer from "./Footer";
import Tweet from "./Tweet";

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

const Home = (props) => {
  useEffect(() => {
    document.title = "Home / Tweeter";
  });

  return (
    <Container>
      <Header />
      <Tweet />
      <StyledComposeLink to="/compose">+</StyledComposeLink>
      <Footer />
    </Container>
  );
};

export default Home;
