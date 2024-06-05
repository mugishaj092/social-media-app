import React from "react";
import "./post.css";
import comment from "../../../../img/comment.png";
import share from "../../../../img/share.png";
import heart from "../../../../img/like.png";
import notLike from "../../../../img/notlike.png";

function Post(data) {
    console.log(data.data);
  return (
    <div className="post">
      <img src={data.data.img} alt="" />

      <div className="postReact">
        <img src={data.data.liked ? heart : notLike} alt="" />
        <img src={comment} alt="" />
        <img src={share} alt="" />
      </div>
      <div className="detail">
        <span><b>{data.data.name}</b></span>
        <span> {data.data.desc}</span>
      </div>
    </div>
  );
}

export default Post;
