import React, { Component } from 'react';
import Chart from 'chart.js';
import './Graph.css';
export class Graph extends Component {
  constructor(props) {
    super(props);
    this.drawGraph = this.drawGraph.bind(this);
    this.suggestions = this.suggestions.bind(this);
  }

  suggestions(temp, raining) {
    let suggestion = '';
    if (temp < 0) {
      suggestion =
        "☃ IT'S VERY COLD ☃\n☃.Replace cotton with wool\n☃.Wear Four to six layers of clothing\n☃.Make sure you have winter accessories";
    } else if (temp > 0 && temp <= 15) {
      suggestion =
        "❄IT'S COLD❄:\n❄.Wear two to three layers as:\n❄.An inner\n❄.Sweatshirt\n❄.A leather jacket or a pretty coat";
    } else if (temp > 15 && temp <= 25) {
      suggestion =
        "☁IT'S MODERATE☁\n☁Consider wearing moderate clothes\n☁Go out for some picnic\n☁Wear a hoodie,Tshirt,pants,sneakers etc";
    } else if (temp > 25 && temp <= 30) {
      suggestion =
        '☀IT MAY BE HOT☀\nTry to wear :\n☀.Loose and light coloured clothes\n☀.Cotton fabric\n☀.Stay hydrated.';
    } else if (temp > 30) {
      suggestion =
        "☀IT'S HOT☀\n☀Prefer wearing light clothes.\n☀Keep yourself cool and hydrated";
    }
    let suggestion1 = '';
    if (raining.includes('Rain')) {
      suggestion1 =
        '☔"IT\'S RAINING"☔\n☔Consider taking umbrella\n☔Consider wearing a raincoat';
    } else if (raining.includes('Haze') || raining.includes('Smoke')) {
      suggestion1 =
        '☔"IT\'S HAZE"☔\n☔ Make sure the headlights of your vehicle are working';
    } else {
      suggestion1 = '';
    }
    return suggestion + '\n' + suggestion1;
  }

  drawGraph() {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          `${this.props.list[1].dt_txt}`,
          `${this.props.list[2].dt_txt}`,
          `${this.props.list[3].dt_txt}`,
          `${this.props.list[4].dt_txt}`,
          `${this.props.list[5].dt_txt}`,
          `${this.props.list[6].dt_txt}`,
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [
              `${this.props.list[1].main.temp}`,
              `${this.props.list[2].main.temp}`,
              `${this.props.list[3].main.temp}`,
              `${this.props.list[4].main.temp}`,
              `${this.props.list[5].main.temp}`,
              `${this.props.list[6].main.temp}`,
            ],
            backgroundColor: [
              'Red',
              'Blue',
              'Yellow',
              'Green',
              'Purple',
              'Orange',
            ],
            borderColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            borderWidth: 1,
          },
        ],
      },
    });
  }
  componentDidMount() {
    this.drawGraph();
  }
  componentDidUpdate() {
    this.drawGraph();
  }
  render() {
    let newText = this.suggestions(
      (this.props.list[0].main.temp - 273.15).toFixed(2),
      this.props.list[0].weather[0].description
    )
      .split('\n')
      .map((item, i) => <p key={i}>{item}</p>);
    return (
      <div className="graph">
        <canvas id="myChart" width="100" height="100"></canvas>
        <div className="graph__suggestions">
          <h1>Sugestions</h1>
          <p>{newText}</p>
        </div>
      </div>
    );
  }
}

export default Graph;
