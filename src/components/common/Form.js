// Form.js

import React from "react";
import styled from "styled-components";
// import { sizes, devices } from "../styling";
import { Maindiv, Paragraph, StyledButton } from "../../Start";

const StyledForm = styled.form`
  padding-top: 3rem;
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  box-sizing: border-box;
  border-radius: 0.5rem;
`;

const birdIcon = require("../../img/tweeter-3.png");

const Form = (props) => {
  return (
    <Maindiv>
      <img src={birdIcon.default} width={80} alt={"Tweeter"}></img>
      <Paragraph>Enter your details</Paragraph>
      <StyledForm>
        {props.renderNameInputs ? (
          <div>
            <StyledInput
              type="text"
              id="username"
              placeholder="User name"
              onChange={(e) => props.setUserName(e.target.value)}
            />
            <StyledInput
              type="text"
              id="displayname"
              placeholder="Display name"
              onChange={(e) => props.setDisplayName(e.target.value)}
            />
          </div>
        ) : null}
        <StyledInput
          type="email"
          id="email"
          placeholder="Email address"
          onChange={(e) => props.setEmail(e.target.value)}
        />
        <StyledInput
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => props.setPassword(e.target.value)}
        />
      </StyledForm>
      <StyledButton onClick={props.handleAction}>{props.title}</StyledButton>
    </Maindiv>
  );
};

export default Form;
