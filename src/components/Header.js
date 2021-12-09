// Header.js

import React from "react";
import styled from "styled-components";
// import { sizes, devices } from "../styling";
import avatarPic from "../img/tshirt-1.jpg";
import birdIcon from "../img/tweeter-3.png";
import starsIcon from "../img/icons8-stars-32.png";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid lightgrey;
`;

const HeaderDiv = styled.div`
  width: 10%;
  // border-radius: 50%;
  position: relative;
`;

const HeaderImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <HeaderDiv>
        <HeaderImg src={avatarPic} height={30} alt="avatar" />
      </HeaderDiv>
      <HeaderDiv>
        <HeaderImg src={birdIcon} height={30} alt="tweeter" />
      </HeaderDiv>
      <HeaderDiv>
        <HeaderImg src={starsIcon} height={30} alt="stars" />
      </HeaderDiv>
    </StyledHeader>
  );
};

export default Header;
export { StyledHeader, HeaderDiv, HeaderImg };
