import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/contact";
import Menu from "./components/RestaurantMenu";
import ErrorElement from "./components/ErrorElement";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Menu from "./components/RestaurantMenu";

const Grocery = lazy(() => import("./components/Grocery"));

const AboutClass = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loding...</h1>}>
            <AboutClass />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loding...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
    ],
    errorElement: <ErrorElement />,
  },
  <ErrorElement />,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
