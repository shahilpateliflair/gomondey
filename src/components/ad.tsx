import React from "react";
import "../css/ad.css";
function Ad() {
  return (
    <div className="main">
      <div className="para-content">
        <div className="para1">Create a more{"\n"}</div>

        <div className="para2">wonderful{"\n"}</div>
        <div className="para3"> working life</div>
        <p className="para4" style={{ whiteSpace: "pre-line" }}>
          Get unlimited access to all our articles and guides.{"\n"}Absolutely
          free of charge.
        </p>
        <div>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <button className="btn">
            Create Account <i className="fas fa-angle-right"></i>
          </button>
        </form>
      </div>
      </div>
      
    </div>
  );
}
export default Ad;
