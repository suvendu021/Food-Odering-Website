import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load Contact Us component  ", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load input box inside Contact Us component ", () => {
  render(<Contact />);
  const input1 = screen.getByPlaceholderText("Enter Your Name");
  expect(input1).toBeInTheDocument();
});

test("should load submit btn inside Contact Us component ", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("should load my all input boxes inside Contact Us component ", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
});
