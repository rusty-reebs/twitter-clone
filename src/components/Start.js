// Start.js

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../styles/styling";

const Maindiv = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1.5rem;
  font-family: "Roboto", "IBM Plex Sans", sans-serif;
  color: black;

  @media ${devices.laptop} {
    max-width: 60vw;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
`;

const Heading = styled.h1`
  // font-weight: 700;
  // color: black;
  font-size: 3.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.h3`
  // font-weight: 400;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  background-color: #1da1f2;
  color: white;
  font-family: "Roboto", "IBM Plex Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 3rem;
  margin: 0.5rem;
  border: none;
  cursor: pointer;

  @media ${devices.laptop} {
    width: 30%;
  }
`;

const SigninButton = styled(StyledButton)`
  background-color: white;
  color: #1da1f2;
  border: 0.5px solid darkgrey;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

const TinyParagraph = styled.p`
  font-size: 0.5rem;
  text-align: center;
`;

const Footer = styled.div`
  align-self: center;
  display: table;
  position: fixed;
  bottom: 0.5rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const birdIcon = require("../img/tweeter-3.png");

const Start = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Tweeter - Welcome";
  });

  return (
    <Maindiv>
      <img src={birdIcon.default} width={80} alt={"Tweeter"}></img>
      <Heading>
        Happening
        <br></br>
        now
      </Heading>
      <Subheading>Join Tweeter today.</Subheading>
      <StyledButton onClick={() => navigate("/register")}>
        Sign up with email
      </StyledButton>
      <StyledButton onClick={() => props.handleAction("guest")}>
        Sign in as a guest
      </StyledButton>
      <TinyParagraph>
        By the way, there are <strong>no</strong> Terms of Service or Privacy
        Policy.
      </TinyParagraph>
      <Paragraph>Already have an account?</Paragraph>
      <SigninButton onClick={() => navigate("/login")}>Sign in</SigninButton>
      <Footer>
        <p>
          🤩 Built with enthusiasm by{" "}
          <a href="https://github.com/rusty-reebs">rusty-reebs</a>&nbsp;
          <span>
            <i className="devicon-github-original colored"></i>
          </span>
        </p>
      </Footer>
    </Maindiv>
  );
};

export default Start;
export { Maindiv, StyledButton, Paragraph };
