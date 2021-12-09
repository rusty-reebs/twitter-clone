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
`;

const TweetAvatarDiv = ComposeAvatarDiv;
const TweetAvatarImg = styled(ComposeAvatarImg)`
  top: 50%;
`;

const Tweet = (props) => {
  return (
    <TweetDiv>
      <StyledDiv>
        <TweetAvatarDiv>
          <TweetAvatarImg src={tshirtAvatar} height={30} alt="avatar" />
        </TweetAvatarDiv>
        <StyledContentDiv>
          <div>
            <p>
              <strong>Rusty Reebs</strong> @rusty_reebs 15m
            </p>
          </div>
          <div>
            <p>Just setting up my twtr.</p>
          </div>
        </StyledContentDiv>
      </StyledDiv>
      <StyledIconsDiv>
        <img src={commentIcon} height={20} alt="comment" />
        <p>4</p>
        <img src={retweetIcon} height={20} alt="retweet" />
        <p>12</p>
        <img src={heartIcon} height={20} alt="heart" />
        <p>24</p>
        <img src={shareIcon} height={20} alt="share" />
      </StyledIconsDiv>
    </TweetDiv>
  );
};

export default Tweet;
