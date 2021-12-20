// Header.js

import React from "react";
import styled from "styled-components";
// import { sizes, devices } from "../styling";
import birdIcon from "../img/tweeter-3.png";
import starsIcon from "../img/icons8-stars-32.png";
import Avatar from "./Avatar";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid lightgrey;
  z-index: 100;
`;

const HeaderDiv = styled.div`
  width: 10%;
  // border-radius: 50%;
  position: relative;
`;

const HeaderAvatarDiv = styled(HeaderDiv)`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 10%;
  margin-left: 0.5rem;
`;

const HeaderImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = (props) => {
  return (
    <StyledHeader style={{ zIndex: props.toggleModal ? "0" : "100" }}>
      <HeaderAvatarDiv>
        <Avatar
          displayName={props.displayName}
          handleLogout={props.handleLogout}
          handleModal={props.handleModal}
          toggleModal={props.toggleModal}
        />
      </HeaderAvatarDiv>
      <HeaderDiv>
        <HeaderImg src={birdIcon} height={30} alt="tweeter" />
      </HeaderDiv>
      <HeaderDiv style={{ marginRight: "0.5rem" }}>
        <HeaderImg src={starsIcon} height={30} alt="stars" />
      </HeaderDiv>
    </StyledHeader>
  );
};

export default Header;
export { StyledHeader, HeaderDiv, HeaderImg };
