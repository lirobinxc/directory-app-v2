import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: true
    }
  }

  handleClick = () => {
    (this.state.buttonState) ? 
      this.setState({ buttonState: false })
      : this.setState({ buttonState: true })
  }

  render() {
    
    let buttonText = (this.state.buttonState) ? 'ON' : 'OFF';

    return (
      <button onClick={this.handleClick}>{buttonText}</button>
    );
  }
}

export default Toggle;