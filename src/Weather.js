import React, { Component } from 'react';
import axios from 'axios';
const API_URL =
  'http://api.openweathermap.org/data/2.5/forecast?q=Islamabad&appid=cd205c660f956316eccbe8e38a5e5993';
export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.getWeather = this.getWeather.bind(this);
  }

  async componentDidMount() {
    let result = await axios.get(API_URL);
    this.setState({ data: result.data });
  }

  async getWeather() {
    let weatherRes = await axios.get(
      'http://api.openweathermap.org/data/2.5/forecast?q=Faisalabad&appid=cd205c660f956316eccbe8e38a5e5993'
    );
    console.log(weatherRes.data);
  }
  render() {
    return (
      <div>
        <h1>Weather</h1>
        <button onClick={this.getWeather}>Get Weather</button>
      </div>
    );
  }
}

export default Weather;
