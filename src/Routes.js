// Routes.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "./Login";
import Home from "./components/Home";
import Compose from "./components/Compose";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    height: 100%;
  }
  height: 100vh;
  width: 100vw;
  min-height: 100%;
  max-height: 100%;
  font-family: "Roboto", "IBM Plex Sans", sans-serif;
`;

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/compose" element={<Compose />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
