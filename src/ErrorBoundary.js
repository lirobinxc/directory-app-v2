import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
    console.log(error, info);
  }

  render() {
    if (this.state.hasError === true) {
      return (
        <h1>Woops, an ERROR has occured!</h1>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;