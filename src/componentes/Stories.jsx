import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Stories.css';

function Stories() {
  const [storyImages, setStoryImages] = useState([]);

  useEffect(() => {
    // Requisito: Consumo de API externa con Axios
    axios.get('https://api.thecatapi.com/v1/images/search?limit=8')
      .then(response => {
        setStoryImages(response.data);
      })
      .catch(error => console.error("Error cargando historias:", error));
  }, []);

  return (
    <div className="stories-section">
     

      <div className="stories-container">
        {/* Tu propia historia con el anillo gris y el botón "+" azul */}
        <div className="story-item">
          <div className="story-ring my-story">
            <img 
              src="https://placedog.net/200/200" 
              alt="My Story" 
              className="story-img" 
            />
            <div className="add-story-plus">+</div>
          </div>
          <span className="story-username">Your Story</span>
        </div>

        {/* Historias dinámicas con el anillo de gradiente de Instagram */}
        {storyImages.map((gato, index) => (
          <div className="story-item" key={gato.id}>
            <div className="story-ring">
              <img 
                src={gato.url} 
                alt={`User Story ${index + 1}`} 
                className="story-img" 
              />
            </div>
            <span className="story-username">@gato_fan_{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;