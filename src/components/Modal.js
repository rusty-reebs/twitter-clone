// Modal.js

import React, { useEffect } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { StyledSpan } from "./Compose";
// import { sizes, devices } from "../styling";

const ModalContainer = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  width: 80%;
  margin-top: 0;
  margin-left: 0;
  height: auto;
  background: #fff;
  color: black;
  border: 1px solid #999;
  overflow: auto;
  text-align: left;
`;

const ModalUserDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid lightgrey;
`;

const ModalDiv = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid lightgrey;
`;

const Modal = (props) => {
  useEffect(() => {
    const closeModal = () => {
      props.setToggleModal(false);
    };

    document.addEventListener("click", closeModal);
    return () => {
      document.removeEventListener("click", closeModal);
    };
  });

  return (
    <ModalContainer>
      <ModalBox>
        <ModalUserDiv>
          <Avatar displayName={props.displayName} />
          <h3>{props.displayName}</h3>
          <p>{props.userName}</p>
        </ModalUserDiv>
        <ModalDiv>
          <p>
            <span onClick={props.handleMyTweets}>
              <StyledSpan>chat_bubble</StyledSpan>&nbsp;&nbsp;My Tweets
            </span>
          </p>
          <p>
            <StyledSpan>person</StyledSpan>&nbsp;&nbsp;Profile
          </p>
          <p>
            <StyledSpan>view_list</StyledSpan>&nbsp;&nbsp;Lists
          </p>
          <p>
            <StyledSpan>bookmark</StyledSpan>&nbsp;&nbsp;Bookmarks
          </p>
          <p>
            <StyledSpan>flash_on</StyledSpan>&nbsp;&nbsp;Moments
          </p>
        </ModalDiv>
        <ModalDiv>
          <p>Settings and privacy</p>
          <p>Help Centre</p>
        </ModalDiv>
        <ModalDiv>
          <p>
            <span onClick={props.handleLogout}>
              <StyledSpan>logout</StyledSpan>&nbsp;&nbsp;Log Out
            </span>
          </p>
        </ModalDiv>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
