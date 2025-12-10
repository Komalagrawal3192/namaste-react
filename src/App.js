import * as React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import resList from "./utilities/mockData";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {   
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />
  },
  {
    path:"/contact",
    element: <Contact />,
    errorElement: <Error />
  }
  ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
