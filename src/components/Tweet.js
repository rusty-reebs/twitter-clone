// Tweet.js

import React from "react";
import styled from "styled-components";
// import { sizes, devices } from "../styling";
import {
  //   ComposeAvatarDiv,
  //   ComposeAvatarImg,
  StyledIconsDiv,
  StyledSpan,
} from "./Compose";
import Avatar from "./Avatar";
import commentIcon from "../img/comment.png";
import retweetIcon from "../img/retweet.png";
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
`;

const Tweet = (props) => {
  return (
    <StyledTweetContainer>
      <StyledTweetDiv>
        {props.retweeted && !props.original && (
          <StyledRetweetDiv>
            <img src={retweetIcon} height={15} alt="retweet" />
            &nbsp;
            <p>You Retweeted</p>
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
              &nbsp;{props.userName}&nbsp;&nbsp;{props.time}
            </p>
            <p>{props.content}</p>
          </StyledContentDiv>
        </AvatarAndContentDiv>
      </StyledTweetDiv>
      <StyledIconsDiv>
        <TweetIconsDiv>
          <img src={commentIcon} height={20} alt="comment" />
          <p>{props.comments}</p>
        </TweetIconsDiv>
        <TweetIconsDiv>
          {props.retweeted ? (
            <img src={retweetIcon} height={20} alt="retweet" />
          ) : (
            <img
              src={retweetIcon}
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
            <StyledTweetSpan onClick={() => props.handleLike(props.id)}>
              favorite_border
            </StyledTweetSpan>
          )}
          <p>{props.likes}</p>
        </TweetIconsDiv>
        <img src={shareIcon} height={20} alt="share" />
      </StyledIconsDiv>
    </StyledTweetContainer>
  );
};

export default Tweet;
