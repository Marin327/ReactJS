    import React, { useState } from 'react';
    import '../App.css';
    
    const Gallery = () => {
      const imageFolder = '/images'; // Променете този път според структурата на вашия проект
    
      const images = [
        'images1.jpg',
        'images2.jpg',
        'images4.jpg',
        'images5.jpg',
        'images6.jpg',
        'images7.jpg',
        'images8.jpg',
        'images9.jpg',
        'images10.jpg',
        'images11.jfif',
      ];
    
      const [selectedImage, setSelectedImage] = useState(null);
    
      const openImage = (index) => {
        setSelectedImage(index);
      };
    
      const closeImage = () => {
        setSelectedImage(null);
      };
    
      return (
        <div className="gallery">
          <h2>Gallery</h2>
          <div className="image-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}${imageFolder}/${image}`}
                alt={`Image ${index + 1}`}
                className="gallery-image"
                onClick={() => openImage(index)}
              />
            ))}
          </div>
          {selectedImage !== null && (
            <div className="modal" onClick={closeImage}>
              <img
                src={`${process.env.PUBLIC_URL}${imageFolder}/${images[selectedImage]}`}
                alt={`Selected Image`}
                className="modal-image"
              />
            </div>
          )}
        </div>
      );
    };
    
    export default Gallery;
