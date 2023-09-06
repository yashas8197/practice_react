import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturentCard = ({ resName, cuisines, starRating }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"
      />
      <h3>{resName}</h3>
      <h3>{cuisines}</h3>
      <h3>{starRating}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        <ResturentCard
          resName="Meghana Foods"
          cuisines="Biriyani , North Indian , Asian"
          starRating="4.4"
        />
        <ResturentCard resName="KFC" cuisines="Burgers" starRating="4.3" />
      </div>
    </div>
  );
};

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
