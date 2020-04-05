import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import ReactFileReader from "react-file-reader";

import text from "./israel.txt";

class SplineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldrender: 0,
      data: [],
      dates: [],
      cases: [],
      newcases: [],
      hardcases: [],
      dead: [],

      series: [
        {
          name: "series1",
          data: [3824, 4316, 4782, 5523, 6168, 6857, 7120],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy",
          },
        },
      },
    };
  }

  handleFetch() {
    console.log("handle Fetch");
    fetch("http://127.0.0.1:3001/api/is")
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data.split("[") }))
      .then((res) => this.handleLoop(this.state.data));
    // .then((res) => console.log(this.state.data[3].split(" ")[0])); //date
  }
  handleLoop(data) {
    console.log("handleLoop");
    for (var i in data) {
      var newd = data[i].split(" ");
      this.state.dates[i] = newd[0];
      this.state.options.xaxis.categories[i] = newd[0];
      this.state.cases[i] = newd[1];
      this.state.newcases[i] = newd[2];
      this.state.hardcases[i] = newd[3];
      this.state.dead[i] = newd[4];
    }

    console.log("handle loop finish ", this.state);
    this.setState({ shouldrender: 1 });
  }

  componentWillMount() {
    // this.handleFetch();
    console.log("handle Fetch");
    fetch("http://127.0.0.1:3001/api/is")
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data.split("[") }))
      .then((res) => this.handleLoop(this.state.data));
    console.log("finish", this.state);
  }

  handleChart() {
    if (this.state.shouldrender == 1) {
      return (
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={300}
        />
      );
    }
  }

  render() {
    console.log("render", this.state);
    return (
      <div id="chart">
        {!this.state.shouldrender ? (
          <p>hello</p>
        ) : (
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={300}
          />
        )}
      </div>
    );
  }
}
export default SplineChart;
