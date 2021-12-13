// Tweet.js

import React from "react";
import styled from "styled-components";
// import { sizes, devices } from "../styling";
import {
  StyledDiv,
  ComposeAvatarDiv,
  ComposeAvatarImg,
  StyledIconsDiv,
  StyledSpan,
} from "./Compose";
import commentIcon from "../img/comment.png";
import retweetIcon from "../img/retweet.png";
import shareIcon from "../img/share.png";

const TweetDiv = styled.div`
  border-bottom: 0.5px solid lightgrey;
  z-index: -1;
`;

const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 85%;
  padding-right: 0.6rem;
`;

const TweetAvatarDiv = ComposeAvatarDiv;
const TweetAvatarImg = styled(ComposeAvatarImg)`
  top: 2vh;
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
    <TweetDiv>
      <StyledDiv>
        <TweetAvatarDiv>
          <TweetAvatarImg
            style={{ borderRadius: "50%" }}
            src={props.avatar}
            height={30}
            alt="avatar"
          />
          {/* <TweetAvatarImg src={tshirtAvatar} height={30} alt="avatar" /> */}
        </TweetAvatarDiv>
        <StyledContentDiv>
          <div>
            {props.retweeted && !props.original && (
              <div style={{ display: "flex" }}>
                <img src={retweetIcon} height={15} alt="retweet" />
                &nbsp;
                <p>You Retweeted</p>
              </div>
            )}
            <p>
              <strong>{props.name}</strong>
              &nbsp;{props.username}&nbsp;&nbsp;{props.time}
            </p>
          </div>
          <div>
            <p>{props.content}</p>
          </div>
        </StyledContentDiv>
      </StyledDiv>
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
    </TweetDiv>
  );
};

export default Tweet;
