import React from 'react';
import { 
  FaHome, FaCompass, FaRegPlayCircle, FaTv, FaRegBell, 
  FaCheckCircle, FaUser, FaHeart 
} from "react-icons/fa"; // Importamos los iconos específicos
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <div className="profile-avatar-container">
          {/* Reemplaza con la imagen de Franco */}
          <img src="https://placedog.net/200/200" alt="Perfil" className="avatar-img" />
        </div>
        
        <h2 className="user-name">
          Franco Urquizo <FaCheckCircle className="verified-badge" />
        </h2>
        <p className="user-handle">@Urquizo_franco</p>
        
        {/* CAJAS DE ESTADÍSTICAS CON ICONOS */}
        <div className="user-stats">
          <div className="stat-item">
            <FaUser className="stat-icon" /> 
            <span>1000K</span>
          </div>
          <div className="stat-item">
            <FaHeart className="stat-icon" /> 
            <span>900K</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <button className="nav-item active"><FaHome /> Home</button>
        <button className="nav-item"><FaCompass /> Explore</button>
        <button className="nav-item"><FaRegPlayCircle /> Reels</button>
        <button className="nav-item"><FaTv /> iGTV</button>
        <button className="nav-item"><FaRegBell /> Notification</button>
      </nav>
    </aside>
  );
}

export default Sidebar;