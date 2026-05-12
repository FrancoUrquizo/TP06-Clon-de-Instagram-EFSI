import React from "react";
import Header from "./componentes/header";
import Sidebar from "./componentes/Sidebar";
import Feed from "./vistas/Feed";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Barra superior con buscador */}
      <Header />
      
      <div className="main-layout">
        {/* Lado izquierdo: Información del usuario y menú */}
        <Sidebar />

        {/* Lado derecho: Historias y Feed de gatos */}
        <main className="content-area">
          <Feed />
        </main>
      </div>
    </div>
  );
}

export default App;