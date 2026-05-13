import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaPaperPlane } from "react-icons/fa";
import "./Posteo.css";

function Posteo({ imageUrl, user, alClickear }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post-card">
      <img 
        src={imageUrl} 
        alt="Post" 
        className="post-image" 
        onClick={alClickear} 
      />
      
      <div className="post-footer">
        <div className="post-user-info">
          <img src={imageUrl} className="avatar-mini" alt="user avatar" />
          <span className="post-username">{user}</span>
        </div>
        
        <div className="post-actions">
          <button className="action-btn" onClick={() => setLiked(!liked)}>
            {liked ? <FaHeart className="liked-icon" /> : <FaRegHeart />}
          </button>
          <button className="action-btn"><FaComment /></button>
          <button className="action-btn"><FaPaperPlane /></button>
        </div>
      </div>
    </div>
  );
}

export default Posteo;