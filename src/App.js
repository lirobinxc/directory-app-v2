import React from 'react';
import Cardlist from './Cardlist'
import Searchbox from './Searchbox'

const App = () => {
  return (
    <div className="tc">
      <Searchbox />
      <Cardlist />
    </div>
  )
}

export default App;