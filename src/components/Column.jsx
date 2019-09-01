import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "react-apexcharts";

class Column extends Component {
  state = {
    values: this.props.value
  };

  handleChange = () => {
    console.log("handle change");
  };

  render() {
    //console.log("rendering column", this.state.values);
    return (
      <ReactApexChart
        options={this.state.values.options}
        series={this.state.values.series}
        onClick={() => console.log("click")}
        onChange={() => console.log("change")}
        type="bar"
        width="500"
      />
    );
  }
}

export default Column;
