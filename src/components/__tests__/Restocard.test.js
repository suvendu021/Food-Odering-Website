import { render, screen } from "@testing-library/react";
import RestoCard from "../RestoCard";
import MOCKDATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should load restaurant card with data to my screen", () => {
  render(<RestoCard resData={MOCKDATA} />);

  const name = screen.getByText("Chicago Pizza");
  expect(name).toBeInTheDocument();
});
