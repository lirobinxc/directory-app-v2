import React from 'react';
import Card from './Card';
import { users } from './users';

const Cardlist = () => {
  return (
    <div>
      {
        [<p>hello</p>]
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

