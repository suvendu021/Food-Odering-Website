import { render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCKRESDATA from "../mocks/restaurantListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = () => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCKRESDATA);
    },
  });
};
it("Should be show my desired resto card as in search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchinput");

  expect(searchBtn).toBeInTheDocument();
});
