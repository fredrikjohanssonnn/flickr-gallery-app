import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

const PhotoList = ({ images }) => {
  /* If the image array contains more than one element, map through the collection and render the Photo component */
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
