import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  state = {};
  render() {
    const vals = this.props.values;
    return (
      <div className="donut">
        <Chart
          options={vals.options}
          series={vals.series}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default Donut;
