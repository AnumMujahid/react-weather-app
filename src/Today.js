import React, { Component } from 'react';

export class Today extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.city}</h1>
      </div>
    );
  }
}

export default Today;
