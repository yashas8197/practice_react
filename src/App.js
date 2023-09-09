import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Hearder";
import ResturentCard from "./components/Restaurant";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
