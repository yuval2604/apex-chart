import React, { Component } from "react";
import Donut from "../components/Donut";
import Graph from "../components/graph";
import Column from "../components/Column";
import BarChart from "../components/barChart";
import ReactApexChart from "react-apexcharts";

class Dashboard extends Component {
  state = {
    values: this.props.value
  };
  render() {
    console.log("Dashboard", this.state.values.options.xaxis.categories);
    // console.log(this.state.values.option.xaxis);
    // console.log(this.state.values.option.series);
    return (
      <div className="mixed-chart">
        <div>
          <Column value={this.state.values} />
        </div>
        <div>
          <Graph value={this.state.values} />
        </div>
        <div className="donut">
          {
            <Donut
              option={this.state.values.options}
              series={this.state.values.series[0]["data"]}
            />
          }

          <BarChart
            categories={this.state.values.options.xaxis.categories}
            data={this.state.values.series[0]["data"]}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
