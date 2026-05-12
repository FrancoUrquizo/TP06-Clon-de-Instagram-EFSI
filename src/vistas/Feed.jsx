import React, { useState, useEffect } from "react";
import axios from "axios";
import Posteo from "../componentes/Posteo";
import Stories from "../componentes/Stories"; 
import "./Feed.css";

function Feed() {
  const [gatos, setGatos] = useState([]);

  useEffect(() => {
   
    axios.get("https://api.thecatapi.com/v1/images/search?limit=12")
      .then((response) => setGatos(response.data))
      .catch((error) => console.error("Error al cargar gatos:", error));
  }, []);

  return (
    <main className="feed-container">
     <h2 className="stories-title"> STORIES</h2>
      <Stories />

     
      <h2 className="trending-title">TRENDING</h2>

      
      <div className="posts-grid">
        {gatos.map((gato) => (
          <Posteo 
            key={gato.id} 
            imageUrl={gato.url} 
            user={`@gato_influencer_${gato.id.slice(0, 3)}`} 
          />
        ))}
      </div>
    </main>
  );
}

export default Feed;