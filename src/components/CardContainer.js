import React from 'react';

//components
import Card from './Card';
import MediaCard from './MediaCard';

const CardContainer = ({ lists }) => {
  return (
    <div className="card-container">
      {lists.map((list, index) => (
        <MediaCard list={list} key={index} />
      ))}
    </div>
  );
};

export default CardContainer;
