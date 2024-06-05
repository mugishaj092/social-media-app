import React from "react";
import "./profileCard.css";
import cover from "../../../img/cover.jpg";
import profile from "../../../img/profileImg.jpg";

function ProfileCard() {
  const Profilepage = true;
  return (
    <div className="ProfileCard">
      <div className="profileImages">
        <img src={cover} alt="cover" />
        <img src={profile} alt="profile" />
      </div>

      <div className="profileName">
        <span>Walmond MJ</span>
        <span>UI/UX || Software Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div className="status">
          <div className="follow">
            <span>5,020</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>587</span>
            <span>Followers</span>
          </div>
          {Profilepage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>5,020</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {Profilepage? " ":<span>My Profile</span>}
    </div>
  );
}

export default ProfileCard;
