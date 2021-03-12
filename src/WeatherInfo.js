import axios from 'axios';
import React, { Component } from 'react';
import Today from './Today';
export class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      city: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(evt) {
    let weatherRes = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=cd205c660f956316eccbe8e38a5e5993`
    );
    this.setState({ data: weatherRes.data });
    console.log(this.state.data);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    return (
      <div>
        <label htmlFor="city">City:</label>
        <input name="city" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Find</button>
        <Today city={this.state.data ? this.state.data.city.name : 'Hello'} />
      </div>
    );
  }
}

export default WeatherInfo;
