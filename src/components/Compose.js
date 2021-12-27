// Compose.js

import React from "react";
import styled from "styled-components";
import { StyledHeader, HeaderImg } from "./Header";
import { StyledButton } from "./Start";
import backIcon from "../img/icons8-left-24.png";
import Avatar from "./Avatar";
import { devices } from "../styling";

const StyledComposeDiv = styled.div`
  @media ${devices.laptop} {
  }
`;

const TweetButton = styled(StyledButton)`
  font-size: smaller;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;

  @media ${devices.laptop} {
    width: 15%;
    font-size: medium;
  }
`;

const StyledBackArrow = styled.div`
  width: 10%;
  position: relative;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  display: flex;
  padding-top: 1rem;
`;

const ComposeAvatarDiv = styled.div`
  display: flex;
  width: 15%;
  justify-content: center;
`;

const StyledTextArea = styled.textarea`
  font-family: "Roboto", "IBM Plex Sans", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5rem;
  resize: none;
  width: 85%;
  height: 25vh;
  outline: none;
  border-bottom 0.5px solid lightgrey;
  border-top: none;
  border-left: none;
  border-right: none;
`;

const StyledIconsDiv = styled.div`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.8rem;
  padding-left: 15%;
  gap: 1rem;
`;

const StyledSpan = styled.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 1.3rem;
  color: #1da1f2;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
`;

const Compose = (props) => {
  return (
    <StyledComposeDiv>
      <StyledHeader>
        <StyledBackArrow onClick={props.handleCompose}>
          <HeaderImg src={backIcon} height={30} alt="back" />
        </StyledBackArrow>
        <TweetButton onClick={props.handleSubmit}>Tweet</TweetButton>
      </StyledHeader>
      <StyledDiv>
        <ComposeAvatarDiv>
          <Avatar displayName={props.displayName} />
        </ComposeAvatarDiv>
        <StyledTextArea
          type="text"
          maxLength="280"
          placeholder="What's happening?"
          wrap="soft"
          value={props.value}
          onChange={props.handleChange}
        />
      </StyledDiv>
      <StyledIconsDiv>
        <StyledSpan>image</StyledSpan>
        <StyledSpan>gif_box</StyledSpan>
        <StyledSpan>poll</StyledSpan>
        <StyledSpan>event</StyledSpan>
      </StyledIconsDiv>
    </StyledComposeDiv>
  );
};

export default Compose;
export { StyledDiv, StyledIconsDiv, StyledSpan };
