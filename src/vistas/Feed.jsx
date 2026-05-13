import React, { useState, useEffect } from "react";
import axios from "axios";
import Posteo from "../componentes/Posteo";
import Stories from "../componentes/Stories";
import ModalPosteo from "../componentes/ModalPosteo"; 
import "./Feed.css";

function Feed() {
  const [gatos, setGatos] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null); 

  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/images/search?limit=12")
      .then((response) => setGatos(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="feed-container">
      <h2 className="trending-title">STORIES</h2>
      <Stories />
      <h2 className="trending-title">TRENDING</h2>
      <div className="posts-grid">
        {gatos.map((gato) => (
          <Posteo 
            key={gato.id} 
            imageUrl={gato.url} 
            user={`@gato_lover_${gato.id.slice(0,3)}`}
            alClickear={() => setSeleccionado({ imageUrl: gato.url, user: `@gato_lover_${gato.id.slice(0,3)}` })} // Pasar función por props
          />
        ))}
      </div>

     
      {seleccionado && (
        <ModalPosteo post={seleccionado} alCerrar={() => setSeleccionado(null)} />
      )}
    </main>
  );
}

export default Feed;