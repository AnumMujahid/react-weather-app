import React, { Component } from 'react';

export class Today extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.country}</h1>
        <h1>{this.props.city}</h1>
        <h1>{this.props.clouds}</h1>
        <h1>{this.props.date}</h1>
        <h1>{this.props.temperature}</h1>
        <h1>{this.props.min_temp}</h1>
        <h1>{this.props.max_temp}</h1>
        <h1>{this.props.pressure}</h1>
        <h1>{this.props.sea_level}</h1>
        <h1>{this.props.ground_level}</h1>
        <h1>{this.props.humidity}</h1>
        <h1>{this.props.weather_main}</h1>
        <h1>{this.props.weather_desc}</h1>
        <h1>{this.props.wind_speed}</h1>
        <h1>{this.props.wind_deg}</h1>
        <h1>{this.props.rain}</h1>
        <h1>{this.props.snow}</h1>
        <img src={this.props.image} alt="" width="100" height="100" />
      </div>
    );
  }
}

export default Today;
