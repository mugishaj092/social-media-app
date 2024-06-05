import React, { useState, useRef } from "react";
import "./postShare.css";
import profileImg from "../../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,UilTimes
} from "@iconscout/react-unicons";

function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={profileImg} alt="profile" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div className="options" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="options" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="options" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="options" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button share-btn">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image&&(
          <div className="previewImage">
            <UilTimes onClick={()=>{
              setImage(null)
            }}/>
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
