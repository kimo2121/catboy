import React from "react";
import "./roadMap.css";
import image5 from "../../assets/images/image5.png";
import image4 from "../../assets/images/image4.png";
import image1 from "../../assets/images/image1.png";
import punk_302 from "../../assets/images/punk_302.jpeg";
import punk_311 from "../../assets/images/punk_311.jpeg";
import punk_13 from "../../assets/images/punk_13.jpeg";

const RoadMap: React.FC = () => {
  return (
    <div className="road-map">
      <h1>ROADMAP</h1>
      <div className="map-1st">
        <div>
          <h2>20% - Minted</h2>
          <p>
            Begin Campaign With BSC Consultants for comprehensive marketing.
          </p>
        </div>
        <img src={image5} alt="" />
      </div>
      <div className="map-2nd">
        <img src={image4} alt="" />
        <div>
          <h2>50% - Minted</h2>
          <p>Begin work on P2E Game</p>
        </div>
      </div>
      <div className="map-1st">
        <div>
          <h2>100% - Minted</h2>
          <p>Apply for PancakeSwap and spread the word</p>
        </div>
        <img src={image1} alt="" />
      </div>
    </div>
  );
};

export default RoadMap;
