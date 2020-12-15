import React from 'react';

const Searchbox = ({searchFxn}) => {
  return (
    <div className="ma4">
      <input 
        type="text" 
        className="w5 h2 ba bw1 b--light-blue"
        placeholder="Search robots..."
        onChange={searchFxn}
      />
    </div>
  )
}

export default Searchbox;

