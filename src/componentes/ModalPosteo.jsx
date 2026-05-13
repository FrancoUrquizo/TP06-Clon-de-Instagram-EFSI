import React from 'react';
import { FaHeart, FaComment, FaPaperPlane, FaTimes } from "react-icons/fa";
import "./ModalPosteo.css";

function ModalPosteo({ post, alCerrar }) {
  if (!post) return null;

  return (
    <div className="modal-overlay" onClick={alCerrar}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="btn-cerrar" onClick={alCerrar}><FaTimes /></button>
        
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={post.imageUrl} alt="Post ampliado" />
          </div>
          
          <div className="modal-details">
            <div className="modal-user-header">
              <img src={post.imageUrl} className="avatar-mini" alt="avatar" />
              <strong>{post.user}</strong>
            </div>
            
            <div className="modal-comments">
              <p><strong>{post.user}</strong> ¡Miren qué lindo este gatito! 🐱 #CatAPI #React</p>
              <div className="fake-comment"><strong>gato_fan_1</strong> ¡Qué ternura! ❤️</div>
              <div className="fake-comment"><strong>ort_estudiante</strong> Excelente proyecto de EFSI.</div>
            </div>

            <div className="modal-footer">
              <div className="modal-actions">
                <FaHeart /> <FaComment /> <FaPaperPlane />
              </div>
              <div className="modal-likes"><strong>1.240 likes</strong></div>
              <div className="modal-date">Publicado hace 2 días</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPosteo;