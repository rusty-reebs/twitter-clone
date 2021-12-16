// Avatar.js

import React from "react";
import styled from "styled-components";

const AvatarDiv = styled.div`
  display: flex;
  align-content: center;
  // height = 30;
  width: 2rem;
  height: 2rem;
  margin: auto;
  background-color: #1da1f2;
  border-radius: 50%;
`;

const AvatarLetter = styled.h2`
  color: white;
  margin: auto;
  text-shadow: 0.5rem 0.5rem 1rem black;
`;

const Avatar = (props) => {
  const displayName = props.displayName;
  //   console.log(displayName);
  const firstInitial = displayName.charAt(0);

  return (
    <AvatarDiv>
      <AvatarLetter>{firstInitial}</AvatarLetter>
      {/* <AvatarLetter>R</AvatarLetter> */}
    </AvatarDiv>
  );
};

export default Avatar;
