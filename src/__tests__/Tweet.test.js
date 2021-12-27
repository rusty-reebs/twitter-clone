// Tweet.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tweet from "../components/Tweet";

const fakeTweet = {
  displayName: "Mr. Fake",
  retweeted: true,
};

describe("Tweet", () => {
  test("renders tweet with display name", () => {
    render(<Tweet displayName={fakeTweet.displayName} />);

    expect(screen.getByText("Mr. Fake")).toBeInTheDocument();
  });

  test("renders `You Retweeted` if retweeted is true", () => {
    render(
      <Tweet
        displayName={fakeTweet.displayName}
        retweeted={fakeTweet.retweeted}
      />
    );

    expect(screen.getByText("You Retweeted")).toBeInTheDocument();
  });

  test("calls the handleLike callback handler", () => {
    const handleLike = jest.fn();
    render(
      <Tweet displayName={fakeTweet.displayName} handleLike={handleLike} />
    );

    fireEvent.click(screen.getByTestId("heart"), "click");

    expect(handleLike).toHaveBeenCalled();
  });
});
