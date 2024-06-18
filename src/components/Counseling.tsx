import React, { useState } from "react";
import "../css/Counseling.css";
import Header from "./Header";
import Footer from "./Footer";
function Counseling() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  const handleIconClick = (iconIndex: number) => {
    console.log("Icon clicked:", iconIndex);
  };
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="image-container1">
          <h2>
            <span>Personal Advice throughout your working life</span>
          </h2>
        </div>

        <p className="para11">Exprt help when you need it</p>
      </div>
      <Footer />
    </div>
  );
}
export default Counseling;

{
  /* <div className="para1">Personal Advice</div>
          <div className="para2">throughout your working</div>
          <div className="para3">life</div> */
}
