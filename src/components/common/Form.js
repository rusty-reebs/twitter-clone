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
`;

const birdIcon = require("../../img/tweeter-3.png");

const Form = (props) => {
  return (
    <Maindiv>
      <img src={birdIcon.default} width={80} alt={"Tweeter"}></img>
      <Paragraph>Enter your details</Paragraph>
      <StyledForm>
        {props.displayNameInput ? (
          <StyledInput
            type="text"
            id="name"
            placeholder="Enter your display name"
            onChange={(e) => props.setName(e.target.value)}
          />
        ) : null}
        <StyledInput
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => props.setEmail(e.target.value)}
        />
        <StyledInput
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={(e) => props.setPassword(e.target.value)}
        />
      </StyledForm>
      <StyledButton onClick={props.handleAction}>{props.title}</StyledButton>
    </Maindiv>
  );
};

export default Form;
