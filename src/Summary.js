import React, { Component } from 'react';

export class Summary extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.list[1].dt_txt}</h1>
        <h1>{this.props.list[1].weather[0].description}</h1>
        <h1>{this.props.list[1].main.temp}</h1>
      </div>
    );
  }
}

export default Summary;
