import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaPaperPlane } from "react-icons/fa";
import "Posteo.css";

function Posteo({ imageUrl, user }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post-card">
      <img src={imageUrl} alt="Post" className="post-image" />
      <div className="post-footer">
        <div className="post-user-info">
          <img src={imageUrl} className="avatar-mini" alt="user" />
          <span>{user}</span>
        </div>
        <div className="post-actions">
          <button onClick={() => setLiked(!liked)}>
            {liked ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>
          <FaComment />
          <FaPaperPlane />
        </div>
      </div>
    </div>
  );
}

export default Posteo;