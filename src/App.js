import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./components/UserContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
import LogIn from "./components/LogIn";
import ProtectedRoute from "./utils/ProtectedRoute";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //let authentication done and we get "DATA"
  useEffect(() => {
    const userData = {
      name: "",
    };

    setUserName(userData.name);
  }, []);

  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={30}
            containerClassName="notification-container"
            toastOptions={{
              className: "notification-toast",
              duration: 1500,
            }}
          />
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <ProtectedRoute Component={Body}></ProtectedRoute>,
      },
      {
        path: "/",
        element: <LogIn />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
