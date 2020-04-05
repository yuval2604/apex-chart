import React, { Component } from "react";

import Form from "../src/components/form";
import Dashboard from "../src/components/dashboard";
import Column from "../src/components/Column";
import Donut from "../src/components/Donut";
import Graph from "../src/components/graph";
import BarChart from "../src/components/barChart";
import Spline from "../src/components/SplineCharts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state2 = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ["3/4/20", "2/4/20", "1/3/20", "31/3/20", "30/3/20"],
    };

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: "series-1",
          data: [],
        },
      ],
      num: 0,
      inputText: "",
    };
  }

  onIncrement = () => {
    const state_copy = Object.assign({}, this.state);
    state_copy.series["0"]["data"].push(parseInt(this.state.inputText));
    this.setState({ inputText: "" });
    this.setState({
      series: state_copy.series,
    });
    let val = this.state.num + 1;
    this.setState({ num: val });
  };

  onChangeOption = (val) => {
    console.log("onChangeOption ", val);
    const state_copy = Object.assign({}, this.state.options);
    state_copy.xaxis.categories.push(val);
    this.setState({
      options: state_copy,
    });
    console.log("after ", this.state);
  };
  onChangeSeries = (val) => {
    console.log("onChangeSeries ", val);
    const state_copy = [...this.state.series];
    state_copy[0]["data"].push(parseInt(val));
    this.setState({
      series: state_copy,
    });
  };

  changeNum = () => {
    this.setState({
      num: 1,
    });
  };

  pushDashboard() {
    // console.log(this);
    console.log("pushDashboard", this.state.num);
    if (this.state.num == 0) return "";
    else {
      console.log("dashboard rendered");
      return <Dashboard value={this.state} value2={this.state2} />;
    }
  }

  render() {
    console.log("render app.js", this.state);
    return (
      <div className="app">
        <div className="container">
          {/* <Form
            option={this.state.options}
            series={this.state.series}
            onChangeOption={this.onChangeOption}
            onChangeSeries={this.onChangeSeries}
            changeNum={this.changeNum}
          />
          {this.pushDashboard()} */}

          <Spline />

          {/* <Column values={this.state} /> */}

          {/* <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width="500"
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
