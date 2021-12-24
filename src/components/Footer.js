// Footer.js

import React from "react";
import styled from "styled-components";
import { devices } from "../styling";
import birdhouseIconW from "../img/icons8-birdhouse-50white.png";
import birdhouseIconB from "../img/icons8-birdhouse-50black.png";
import searchIcon from "../img/icons8-magnifying-glass-64.png";
import bellIcon from "../img/icons8-bell-64.png";
import mailIcon from "../img/icons8-mail-50.png";

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid lightgrey;
  z-index: 100;

  @media ${devices.laptop} {
    position: static;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const IconDiv = styled.div`
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30;
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      <IconDiv onClick={() => props.closeMyTweets()}>
        <Icon
          style={{ cursor: "pointer" }}
          src={props.showMyTweets ? birdhouseIconW : birdhouseIconB}
          alt={"icon"}
        />
      </IconDiv>
      <IconDiv>
        <Icon src={searchIcon} alt={"icon"} />
      </IconDiv>
      <IconDiv>
        <Icon src={bellIcon} alt={"icon"} />
      </IconDiv>
      <IconDiv>
        <Icon src={mailIcon} alt={"icon"} />
      </IconDiv>
    </StyledFooter>
  );
};

export default Footer;
