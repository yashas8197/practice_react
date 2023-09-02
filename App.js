import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>I am yashas</h1>;
};

const Title1 = () => {
  return <h2>I am learning react</h2>;
};

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      {Title1()}
      <h3>functionl component </h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
