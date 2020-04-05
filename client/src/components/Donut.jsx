import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  state = {
    option: this.props.option,
    series: this.props.series
  };
  render() {
    const option = this.props.option;
    const series = this.props.series;
    return (
      <div className="donut">
        <Chart
          options={this.state.option}
          series={this.state.series}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default Donut;
