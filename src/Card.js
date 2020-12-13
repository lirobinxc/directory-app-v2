import React from 'react';

const Card = ({id, name, email, address: city}) => {
  return (
    <div className="tc bg-lightest-blue pa3 w5 ma2">
      <h1 className="dark-blue ma0">{name}</h1>
      <img alt={`${name}`} src={`https://robohash.org/${id}?200x200`} />
      <div>{city}</div>
      <div>{email}</div>
    </div>
  )
}

export default Card;