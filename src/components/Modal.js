// Modal.js

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { StyledSpan } from "./Compose";
import { devices } from "../styles/styling";

const ModalContainer = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  @media ${devices.laptop} {
    max-width: 60vw;
    margin-left: 20vw;
    margin-right: 20vw;
  }
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

  @media ${devices.laptop} {
    width: 40%;
  }
`;

const ModalUserDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  gap: 0.4rem;
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
  const modalRef = useRef();
  useEffect(() => {
    const closeModal = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        props.handleModal();
      }
    };
    document.addEventListener("click", closeModal);

    return () => {
      document.removeEventListener("click", closeModal);
    };
  });

  return (
    <ModalContainer>
      <ModalBox id="modal" ref={modalRef}>
        <ModalUserDiv>
          <Avatar displayName={props.displayName} />
          <h3>{props.displayName}</h3>
          <p>{props.userName}</p>
        </ModalUserDiv>
        <ModalDiv>
          <p>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.handleMyTweets();
                props.handleModal();
              }}
            >
              <StyledSpan>chat_bubble</StyledSpan>&nbsp;&nbsp;My Tweets
            </span>
          </p>
          <p style={{ opacity: "0.4" }}>
            <StyledSpan>person</StyledSpan>&nbsp;&nbsp;Profile
          </p>
          <p style={{ opacity: "0.4" }}>
            <StyledSpan>view_list</StyledSpan>&nbsp;&nbsp;Lists
          </p>
          <p style={{ opacity: "0.4" }}>
            <StyledSpan>bookmark</StyledSpan>&nbsp;&nbsp;Bookmarks
          </p>
          <p style={{ opacity: "0.4" }}>
            <StyledSpan>flash_on</StyledSpan>&nbsp;&nbsp;Moments
          </p>
        </ModalDiv>
        <ModalDiv>
          <p style={{ opacity: "0.4" }}>Settings and privacy</p>
          <p style={{ opacity: "0.4" }}>Help Centre</p>
        </ModalDiv>
        <ModalDiv>
          <p>
            <span style={{ cursor: "pointer" }} onClick={props.handleLogout}>
              <StyledSpan>logout</StyledSpan>&nbsp;&nbsp;Log Out
            </span>
          </p>
        </ModalDiv>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
