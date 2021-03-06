// Tweet.js

import React from "react";
import styled from "styled-components";
import { StyledIconsDiv, StyledSpan } from "./Compose";
import Avatar from "./Avatar";
import commentIcon from "../img/comment.png";
import blackRetweetIcon from "../img/icons8-retweet-24black.png";
import greenRetweetIcon from "../img/icons8-retweet-24green.png";
import shareIcon from "../img/share.png";

const StyledTweetContainer = styled.div`
  border-bottom: 0.5px solid lightgrey;
  z-index: -1;
`;

const StyledTweetDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;

const StyledRetweetDiv = styled.div`
  display: flex;
  margin-left: 15%;
`;

const AvatarAndContentDiv = styled.div`
  display: flex;
`;

const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 85%;
  padding-right: 0.6rem;
`;

const TweetAvatarDiv = styled.div`
  display: flex;
  width: 15%;
  justify-content: center;
`;

const TweetAvatarImg = styled.img`
  border-radius: 50%;
`;

const TweetIconsDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 4rem;
`;

const StyledTweetSpan = styled(StyledSpan)`
  color: ${(props) => (props.liked ? "red" : "black")};
  cursor: pointer;
`;

const Tweet = (props) => {
  return (
    <StyledTweetContainer>
      <StyledTweetDiv>
        {props.retweeted && !props.original && (
          <StyledRetweetDiv>
            <img src={blackRetweetIcon} height={15} alt="retweet" />
            &nbsp;
            <p data-testid="rt">You Retweeted</p>
          </StyledRetweetDiv>
        )}
        <AvatarAndContentDiv>
          <TweetAvatarDiv>
            {props.avatar ? (
              <TweetAvatarImg src={props.avatar} height={"30"} alt="avatar" />
            ) : (
              <Avatar displayName={props.displayName} />
            )}
          </TweetAvatarDiv>
          <StyledContentDiv>
            <p>
              <strong>{props.displayName}</strong>
              &nbsp;{props.userName}
            </p>
            <p>{props.content}</p>
          </StyledContentDiv>
        </AvatarAndContentDiv>
      </StyledTweetDiv>
      <StyledIconsDiv>
        <TweetIconsDiv>
          <img
            src={commentIcon}
            style={{ opacity: "0.4" }}
            height={20}
            alt="comment"
          />
          <p style={{ opacity: "0.4" }}>{props.comments}</p>
        </TweetIconsDiv>
        <TweetIconsDiv>
          {props.retweeted ? (
            <img src={greenRetweetIcon} height={20} alt="retweet" />
          ) : (
            <img
              style={{ cursor: "pointer" }}
              src={blackRetweetIcon}
              height={20}
              alt="retweet"
              onClick={() => props.handleRetweet(props.id)}
            />
          )}
          <p style={{ color: props.retweeted ? "#00cc00" : "black" }}>
            {props.retweets}
          </p>
        </TweetIconsDiv>
        <TweetIconsDiv>
          {props.liked ? (
            <StyledTweetSpan liked>favorite</StyledTweetSpan>
          ) : (
            <StyledTweetSpan
              data-testid={"heart"}
              onClick={() => props.handleLike(props.id)}
            >
              favorite_border
            </StyledTweetSpan>
          )}
          <p>{props.likes}</p>
        </TweetIconsDiv>
        <img
          src={shareIcon}
          style={{ opacity: "0.4" }}
          height={20}
          alt="share"
        />
      </StyledIconsDiv>
    </StyledTweetContainer>
  );
};

export default Tweet;
