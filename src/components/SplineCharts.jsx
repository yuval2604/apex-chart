import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import ReactFileReader from "react-file-reader";

import text from "./israel.txt";

class SplineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
          categories: [
            "2020-03-27",
            "2020-03-28",
            "2020-03-30",
            "2020-03-31",
            "2020-04-01",
            "2020-04-02",
            "2020-04-03",
          ],
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
    fetch("./israel.txt")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        console.log(data);
      });
  }

  render() {
    return (
      <div id="chart">
        {this.handleFetch()}
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={300}
        />
      </div>
    );
  }
}
export default SplineChart;
