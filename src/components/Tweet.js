// Tweet.js

import React from "react";
import styled from "styled-components";
// import { sizes, devices } from "../styling";
import {
  StyledDiv,
  ComposeAvatarDiv,
  ComposeAvatarImg,
  StyledIconsDiv,
} from "./Compose";
import tshirtAvatar from "../img/tshirt-1.jpg";
import commentIcon from "../img/comment.png";
import retweetIcon from "../img/retweet.png";
import heartIcon from "../img/heart.png";
import shareIcon from "../img/share.png";

const TweetDiv = styled.div`
  border-bottom: 0.5px solid lightgrey;
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
  top: 50%;
`;

const Tweet = (props) => {
  return (
    <TweetDiv key={props.id}>
      <StyledDiv>
        <TweetAvatarDiv>
          <TweetAvatarImg src={tshirtAvatar} height={30} alt="avatar" />
        </TweetAvatarDiv>
        <StyledContentDiv>
          <div>
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
        <img src={commentIcon} height={20} alt="comment" />
        <p>{props.comments}</p>
        <img src={retweetIcon} height={20} alt="retweet" />
        <p>{props.retweets}</p>
        <img src={heartIcon} height={20} alt="heart" />
        <p>{props.likes}</p>
        <img src={shareIcon} height={20} alt="share" />
      </StyledIconsDiv>
    </TweetDiv>
  );
};

export default Tweet;
