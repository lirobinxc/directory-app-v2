import React from 'react';
import Cardlist from './Cardlist'
import Searchbox from './Searchbox'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDatabase: [],
      searchfield: ''
    }
  }

  // Monitor and update Searchbox user input
  onSearchInput = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  componentDidMount() {
    // Load users.json and covert it to object
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({userDatabase: users}))
  }

  render() {

    const { userDatabase, searchfield } = this.state;

    // Filter searchbox input
    let filteredUsers = userDatabase.filter(
      (user) => user.name.toLowerCase().includes(searchfield.toLowerCase())
    )

    // Show loading text if no userDatabase
    let renderCardlist;
    if (userDatabase.length === 0) {
      renderCardlist = <h2 className="white">LOADING</h2>
    } else {
      renderCardlist = <Cardlist userDatabase={filteredUsers}/>
    }

    // Output
    return (
      <div className="tc">
        <h1 className="ttu f1 light-blue mt4 mb2">Robot Search Engine</h1>
        <Searchbox searchFxn={this.onSearchInput}/>
        {renderCardlist}
      </div>
    )
  }
    
}

export default App;