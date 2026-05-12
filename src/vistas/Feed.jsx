import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../componentes/Post';
import "Feed.css";

function Feed() {
  const [gatos, setGatos] = useState([]);

  useEffect(() => {
    // Petición a The Cat API para obtener 10 imágenes
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => {
        setGatos(response.data);
      })
      .catch(error => console.error("Error al cargar gatos:", error));
  }, []);

  return (
    <main className="feed-container">
      <h2>TRENDING</h2>
      <div className="posts-grid">
        {gatos.map(gato => (
          <Post 
            key={gato.id} 
            imageUrl={gato.url} 
            user="@gato_influencer" 
          />
        ))}
      </div>
    </main>
  );
}

export default Feed;