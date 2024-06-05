import React from "react";
import { UilPen } from "@iconscout/react-unicons";
import "./infoCard.css";
function InfoCard() {
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
        <UilPen width='2rem' height='1.2rem'/>
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>In relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Rwanda</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Igacode</span>
      </div>
      <button className="button log-btn">Logout</button>
    </div>
  );
}

export default InfoCard;
