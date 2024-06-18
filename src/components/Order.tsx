import React, { useState } from "react";
import "../css/order-history.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Order() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div>
      <Header  />
      <div className="image-container">
     
        <h3>Your orders and bookings</h3>
        <p>
          If you have questions about your order, please contact us at
          hello@gomonday.se
        </p>
      </div>
      <div className="main-box">
        <h2>You have not placed an order yet</h2>
        <p>
          Go to our services to place an order. All our services are booked and
          carried out digitally, delivered within 24 hours and consist of
          guidance that actually works.
        </p>
        <Link to="/Home"><button>Go to our services and order</button></Link>
      </div>
      <Footer />
    </div>
  );
}

export default Order;
