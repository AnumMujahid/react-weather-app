import React, { Component } from 'react';
import './Summary.css';
export class Summary extends Component {
  render() {
    return (
      <div>
        <div className="next">
          <div>
            <p>{this.props.list[1].dt_txt}</p>
          </div>
          <div className="next--right">
            <p className="next__temperature">
              {(this.props.list[1].main.temp - 273.15).toFixed(2)}&#176; C
            </p>
            <img
              src={`http://openweathermap.org/img/w/${this.props.list[1].weather[0].icon}.png`}
              alt=""
            />
          </div>
        </div>
        <div className="next">
          <div>
            <p>{this.props.list[2].dt_txt}</p>
          </div>
          <div className="next--right">
            <p className="next__temperature">
              {(this.props.list[2].main.temp - 273.15).toFixed(2)}&#176; C
            </p>
            <img
              src={`http://openweathermap.org/img/w/${this.props.list[2].weather[0].icon}.png`}
              alt=""
            />
          </div>
        </div>
        <div className="next">
          <div>
            <p>{this.props.list[3].dt_txt}</p>
          </div>
          <div className="next--right">
            <p className="next__temperature">
              {(this.props.list[3].main.temp - 273.15).toFixed(2)}&#176; C
            </p>
            <img
              src={`http://openweathermap.org/img/w/${this.props.list[3].weather[0].icon}.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
