import React from 'react';
import "./Perfil.css";

const usuarioLogueado = {
  nombre: "Franco Urquizo",
  handle: "@urquizoFranco",
  seguidores: "1000K",
  seguidos: "900K",
  bio: "Estudiante de IT | Amante de los gatos 🐈‍⬛",
  foto: "https://www.threads.com/@emilia.giordano_/post/DK-79ispwLL/tipo-fachero-nuestro-piloto" // O una imagen local
};

function Perfil() {
  return (
    <section className="profile-section">
      <div className="profile-header">
        <img src={usuarioLogueado.foto} alt="Perfil" className="profile-img" />
        <div className="profile-info">
          <h1>{usuarioLogueado.nombre}</h1>
          <p className="handle">{usuarioLogueado.handle}</p>
          <div className="stats">
            <span><strong>{usuarioLogueado.seguidores}</strong> Followers</span>
            <span><strong>{usuarioLogueado.seguidos}</strong> Following</span>
          </div>
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>
    </section>
  );
}

export default Perfil;