// Form.js

import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import styled from "styled-components";
import { devices } from "../styles/styling";
import { Maindiv, Paragraph, StyledButton } from "./Start";

// set app blue color for MUI components
const theme = createTheme({
  palette: {
    primary: {
      main: "#1da1f2",
      light: "#1da1f2",
      dark: "#1da1f2",
    },
  },
});

const StyledForm = styled.form`
  padding-top: 3rem;

  @media ${devices.laptop} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const birdIcon = require("../img/tweeter-3.png");

const Form = (props) => {
  return (
    <Maindiv>
      <ThemeProvider theme={theme}>
        <img src={birdIcon.default} width={80} alt={"Tweeter"}></img>
        <Paragraph>Enter your details</Paragraph>
        <StyledForm>
          {props.renderNameInputs ? (
            <div>
              <TextField
                fullWidth
                type="text"
                id="username"
                label="User Name"
                margin="normal"
                required
                onChange={(e) => props.setUserName(e.target.value)}
              />
              <TextField
                fullWidth
                type="text"
                id="displayname"
                label="Display name"
                margin="normal"
                required
                onChange={(e) => props.setDisplayName(e.target.value)}
              />
            </div>
          ) : null}
          <div>
            <TextField
              fullWidth
              type="email"
              id="email"
              label="Email address"
              margin="normal"
              required
              onChange={(e) => props.setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              type="password"
              id="password"
              label="Password"
              margin="normal"
              required
              onChange={(e) => props.setPassword(e.target.value)}
            />
          </div>
        </StyledForm>
        <StyledButton onClick={props.handleAction}>{props.title}</StyledButton>
      </ThemeProvider>
    </Maindiv>
  );
};

export default Form;
