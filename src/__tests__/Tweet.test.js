// Tweet.test.js

import { getByTestId } from "@testing-library/dom";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Tweet from "../components/Tweet";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders tweet with display name", () => {
  const fakeTweet = {
    displayName: "Mr. Fake",
  };
  act(() => {
    render(<Tweet id="123" displayName={fakeTweet.displayName} />, container);
  });
  expect(container.querySelector("strong").textContent).toBe(
    fakeTweet.displayName
  );
});
