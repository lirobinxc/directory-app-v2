import React from 'react';
import Card from './Card';
import { users } from './users';
import Toggle from './Toggle'

const Cardlist = () => {
  return (
    <div>
      {
        <Toggle />
        // users.map((person, i) => {
        //   return (
        //     <Card 
        //       id={person.id}
        //       name={person.name}
        //       // city={person.address.city}
        //       email={person.email}
        //     />
        //   );
        // })
      }
    </div>
  )
}

export default Cardlist;

