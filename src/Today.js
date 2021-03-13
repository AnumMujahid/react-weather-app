import React, { Component } from 'react';
import './Today.css';
export class Today extends Component {
  render() {
    return (
      <div>
        <div className="temperature">
          <div>
            <img src={this.props.image} alt="" className="temperature__img" />
            <h1 className="temperature__desc">
              {this.props.weather_desc.charAt(0).toUpperCase() +
                this.props.weather_desc.slice(1)}
            </h1>
            <h1 className="temperature__desc">{this.props.date}</h1>
          </div>
          <div>
            <h1 className="temperature__num">
              {(this.props.temperature - 273.15).toFixed(2)}&#176;C
            </h1>
            <h1 className="temperature__desc temperature--right">
              {this.props.city},&nbsp;{this.props.country}
            </h1>
          </div>
        </div>
        <div className="detail">
          <div className="detail__item">
            <h1 className="detail__heading">{this.props.clouds}&nbsp;%</h1>
            <p className="detail__subheading">Clouds</p>
          </div>
          <div className="detail__item">
            <h1 className="detail__heading">{this.props.pressure}&nbsp;hPa</h1>
            <p className="detail__subheading">Pressure</p>
          </div>
          <div className="detail__item">
            <h1 className="detail__heading">{this.props.humidity}&nbsp;%</h1>
            <p className="detail__subheading">Humidity</p>
          </div>
          <div className="detail__item">
            <h1 className="detail__heading">
              {this.props.wind_speed}&nbsp;m/s
            </h1>
            <p className="detail__subheading">Wind</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Today;
