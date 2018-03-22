import React from 'react';
import Contentful from 'contentful';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello, world');
  }

  handleClick(message) {
    console.log('Clicked!' + message);
  }

  render() {
    return (
      <div>
        <h2>Hello, world!</h2>
        <button onClick={(message) => { var message = 'clickit'; this.handleClick(message);  }}>Click Me</button>
      </div>);
  }
}

module.exports = HelloWorld;
