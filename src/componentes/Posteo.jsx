import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaPaperPlane } from "react-icons/fa";
import "./Posteo.css";

function Posteo({ imageUrl, user }) {
  // Requisito 5: Interacción con useState para el botón de Like
  const [liked, setLiked] = useState(false);

  return (
    <div className="post-card">
      {/* Imagen ampliada - Requisito 7 */}
      <img src={imageUrl} alt="Cat Post" className="post-image" />
      
      <div className="post-footer">
        <div className="post-user-info">
          {/* Avatar mini con la misma imagen para simular coherencia */}
          <img src={imageUrl} className="avatar-mini" alt="user avatar" />
          <span className="post-username">{user}</span>
        </div>
        
        <div className="post-actions">
          {/* Al clickear cambia el estado visual del corazón */}
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