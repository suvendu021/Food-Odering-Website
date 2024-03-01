import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import AppStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should be loaded my header component with log-in btn", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByText("Log-in");
  const loginButton = screen.getByRole("button", { name: "Log-in" });
  expect(loginButton).toBeInTheDocument();
});

it("should be loaded my cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByText("Log-in");
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("should be loaded my log-in and log-out btn", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByText("Log-in");
  const loginButton = screen.getByRole("button", { name: "Log-in" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Log-out" });

  expect(logoutButton).toBeInTheDocument();
});
