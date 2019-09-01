import React, { Component } from "react";
import Donut from "../components/Donut";
import Graph from "../components/graph";
import Column from "../components/Column";
class Dashboard extends Component {
  state = {
    values: this.props.value
  };
  render() {
    return (
      <div className="mixed-chart">
        <div>
          <Column value={this.state.values} />
        </div>
        <div>
          <Graph value={this.state.values} />
        </div>
        <div className="donut">{/* <Donut values={this.state2} /> */}</div>
      </div>
    );
  }
}

export default Dashboard;
