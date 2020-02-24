import React from "react";

const BeyCard = ({bey, makeFavorite}) => {
  return (
    <div className='bey-card' onClick={makeFavorite}>
      <h3>{bey.name}</h3>
      <img src={bey.img} />
    </div>
  );
};

export default BeyCard;