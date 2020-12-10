import React from 'react';

const Card = ({id, name, email, address: city}) => {
  return (
    <div className="tc">
      <h1 className="moon-gray">{name}</h1>
      <img alt={`${name}`} src={`https://robohash.org/${id}?200x200`} />
    </div>
  )
}

export default Card;