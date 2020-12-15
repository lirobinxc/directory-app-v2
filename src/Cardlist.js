import React from 'react';
import Card from './Card';

const Cardlist = ({ userDatabase }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {
        userDatabase.map((person, i) => {
          return (
            <Card 
              key={i}
              id={person.id}
              name={person.name}
              email={person.email}
            />
          );
        })
      }
    </div>
  )
}

export default Cardlist;

