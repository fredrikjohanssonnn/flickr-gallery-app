import React from 'react';

const Photo = ({ url }) => {
  return (
    <li>
      <img
        src={`https://farm${url.farm}.staticflickr.com/${url.server}/${url.id}_${url.secret}_m.jpg`}
        alt={url.title}
      />
    </li>
  );
};

export default Photo;
