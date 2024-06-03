import React from "react";
import "./postShare.css";
import profileImg from "../../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
} from "@iconscout/react-unicons";

function PostShare() {
  return (
    <div className="PostShare">
      <img src={profileImg} alt="profile" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div className="options" style={{color:"var(--photo)"}}>
            <UilScenery />
            Photo
          </div>
          <div className="options" style={{color:"var(--video)"}}>
            <UilPlayCircle />
            Video
          </div>
          <div className="options" style={{color:"var(--location)"}}>
            <UilLocationPoint />
            Location
          </div>
          <div className="options" style={{color:"var(--shedule)"}}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button share-btn">Share</button>
        </div>
      </div>
    </div>
  );
}

export default PostShare;
