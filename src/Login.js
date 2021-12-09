import React, { useEffect } from "react";
import styled from "styled-components";
// import { sizes, devices } from "./styling";

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
`;

const Heading = styled.h1`
  // font-weight: 700;
  // color: black;
  font-size: 3.5rem;
`;

const Subheading = styled.h3`
  // font-weight: 400;
  font-size: 2rem;
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
`;

const SigninButton = styled(StyledButton)`
  background-color: white;
  color: #1da1f2;
  border: 0.5px solid darkgrey;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TinyParagraph = styled.p`
  font-size: 0.5rem;
  text-align: center;
`;

const birdIcon = require("./img/tweeter-3.png");

const Login = () => {
  useEffect(() => {
    document.title = "Tweeter - Login";
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
      <StyledButton>Sign up with email</StyledButton>
      <StyledButton>Sign in as a guest</StyledButton>
      <TinyParagraph>
        By the way, there are <strong>no</strong> Terms of Service or Privacy
        Policy.
      </TinyParagraph>
      <Paragraph>Already have an account?</Paragraph>
      <SigninButton>Sign in</SigninButton>
    </Maindiv>
  );
};

export default Login;
export { StyledButton };
