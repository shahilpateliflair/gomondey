import React from "react";
import "../css/Social.css";

function Social() {
 

  return (
    <div className="box">
      <div className="content1">
      <img
            src="/main-logo.svg"
            alt="Go Monday Logo"
            width="100"
            height="56"
          />
        <p>Listen to our podcast Jobbet & Lifet</p>
      </div>
      <div>
        <i className="fa-solid fa-podcast"></i>Apple Podcasts
      </div>
      <div>
        <i className="fa-brands fa-spotify"></i>Spotify
      </div>
      <div>
      <i className="fa-solid fa-podcast"></i>
        Pocket Casts
      </div>
    </div>
  );
}

export default Social;
