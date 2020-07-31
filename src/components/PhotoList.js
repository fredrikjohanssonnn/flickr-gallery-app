import React from 'react';
import Photo from './Photo';

const PhotoList = ({ images }) => {
  return (
    <div className='photo-container'>
      <h2>Results</h2>
      <ul>
        {images.map((image) => (
          <Photo key={image.id} url={image} />
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
