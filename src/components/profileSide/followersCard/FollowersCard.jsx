import React from "react";
import "./followersCard.css";
import { Followers } from "../../../data/FollowerData";

function FollowersCard() {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {Followers.map((follower, i) => {
        return (
          <div className="follower" key={i}>
            <div>
              <img src={follower.img} alt="follower" className="followerImg" />
              <div className="followerName">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-btn">Follow</button>
          </div>
        );
      })}
    </div>
  );
}

export default FollowersCard;
