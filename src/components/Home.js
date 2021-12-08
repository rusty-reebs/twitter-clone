// Main.js

import React, { useEffect } from "react";
import styled from "styled-components";
import { sizes, devices } from "../styling";
import avatarPic from "../img/tshirt-1.jpg";
import Footer from "./Footer";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", "IBM Plex Sans", sans-serif;
  display: flex;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  height: 8vh;
  width: 100%;
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid darkgrey;
`;

const Avatar = styled.div`
  width: 10%;
  // border-radius: 50%;
  position: relative;
`;

const AvatarImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ComposeIcon = styled.div`
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
`;

const Home = (props) => {
  useEffect(() => {
    document.title = "Home / Tweeter";
  });

  return (
    <Container>
      <Header>
        <Avatar>
          <AvatarImg src={avatarPic} height={30} alt="avatar" />
        </Avatar>
        <h3>Home</h3>
      </Header>
      <ComposeIcon>+</ComposeIcon>
      <Footer />
    </Container>
  );
};

export default Home;
