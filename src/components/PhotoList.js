import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

const PhotoList = ({ images }) => {
  return (
    <div className='photo-container'>
      {images.length ? (
        <React.Fragment>
          <h2>Results</h2>
          <ul>
            {images.map((image) => (
              <Photo key={image.id} url={image} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default PhotoList;
