import React from "react";
import axios from "__mocks__/axios";

import { render, cleanup, waitForElement, fireEvent } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

it("defauls to Monday and changes the schedule when a new day is selected", () => {
  const { getByText } = render(<Application />);
  return waitForElement(() => getByText("Monday")).then(() => {
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
});
