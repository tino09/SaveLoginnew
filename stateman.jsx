import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  class Message extends Component {
    constructor(props) {
      super(props);
      // Initialize the component's state
      this.state = {
        clickCount: 0,
      };
    }
  
    // Function to handle the click event
    handleClick = () => {
      // Update the state when the message is clicked
      this.setState((prevState) => ({
        clickCount: prevState.clickCount + 1,
      }));
    };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>

        <div>
        <h1>React State and Props Example</h1>
        {/* Pass a message as a prop to the Message component */}
        <Message message="Click me!" />
      </div>
      </div>
      
    );
  }
}



export default Counter;
