import React, { Component } from 'react';
import Chart from 'chart.js';
export class Graph extends Component {
  componentDidMount() {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
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
  render() {
    return (
      <div>
        <canvas id="myChart" width="100" height="100"></canvas>
      </div>
    );
  }
}

export default Graph;
