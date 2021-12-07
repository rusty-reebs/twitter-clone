// Routes.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Main from "./components/Main";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
