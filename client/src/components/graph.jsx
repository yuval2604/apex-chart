import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

class Graph extends Component {
  state = {};
  render() {
    const vals = this.props.value;
    return (
      <ReactApexChart
        options={vals.options}
        series={vals.series}
        type="line"
        width="500"
      />
    );
  }
}

export default Graph;
