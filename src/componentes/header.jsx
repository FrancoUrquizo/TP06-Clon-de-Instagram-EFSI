import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { MdPhotoCamera } from "react-icons/md";
import BarradeBúsqueda from "./BarradeBúsqueda";
import "Header.css";
function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
      
        <div className="header-logo">
         <FaInstagram/>
         Instagram
        </div>

       <BarradeBúsqueda/>

        {/* Lado Derecho: Iconos y Botón */}
        <div className="header-nav">
          <button className="nav-icon-btn"><MdOutlineSettings /></button>
          <button className="nav-icon-btn"><MdPhotoCamera /></button>
          <button className="nav-icon-btn">< FaPaperPlane/></button>
          <button className="new-post-btn">
            <span className="plus-icon">+</span> New Post
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;