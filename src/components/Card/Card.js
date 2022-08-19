import React from 'react';

const Card = ({ img }) => {
  return (
    <div className="card">
      <h2 className="card-title">Lorem ipsum dolor sit amet</h2>
      <div className="card-content">
        <div className="card-img">
          <img src={img} alt="icon" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
          est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </p>
      </div>
    </div>
  );
};

export default Card;
