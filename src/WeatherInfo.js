import axios from 'axios';
import React, { Component } from 'react';
import Today from './Today';
import Summary from './Summary';
import Graph from './Graph';
import './WeatherInfo.css';

const API_KEY = '';
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
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${API_KEY}`
    );
    this.setState({ data: weatherRes.data });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    let x = this.state.data;
    return (
      <div>
        <div className="nav">
          <div>
            <h1 className="title">{'Weather Alert'.toUpperCase()}</h1>
          </div>
          <div className="search">
            <label className="search__label" htmlFor="city"></label>
            <br />
            <input
              name="city"
              onChange={this.handleChange}
              placeholder="Search"
              className="search__input"
            />
            <button className="search__btn" onClick={this.handleSubmit}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        {this.state.data && this.state.data.cod === '200' && (
          <Today
            country={x.city.country}
            city={x.city.name}
            clouds={x.list[0].clouds.all}
            date={x.list[0].dt_txt}
            temperature={x.list[0].main.temp}
            min_temp={x.list[0].main.temp_min}
            max_temp={x.list[0].main.temp_max}
            pressure={x.list[0].main.pressure}
            sea_level={x.list[0].main.sea_level}
            ground_level={x.list[0].main.grnd_level}
            humidity={x.list[0].main.humidity}
            weather_main={x.list[0].weather[0].main}
            weather_desc={x.list[0].weather[0].description}
            wind_speed={x.list[0].wind.speed}
            wind_degree={x.list[0].wind.deg}
            image={`http://openweathermap.org/img/w/${x.list[0].weather[0].icon}.png`}
            rain={x.list[0].rain ? x.list[0].rain['3h'] : null}
            snow={x.list[0].snow ? x.list[0].snow['3h'] : null}
          />
        )}
        {this.state.data && this.state.data.cod === '200' && (
          <Summary list={x.list} />
        )}
        {this.state.data && this.state.data.cod === '200' && (
          <Graph list={x.list} />
        )}
      </div>
    );
  }
}

export default WeatherInfo;
