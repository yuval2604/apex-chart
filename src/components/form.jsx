import React, { Component } from "react";
import Buttons from "../components/buttons";
import Notification from "../components/Notification";

class form extends Component {
  state = {
    option: this.props.option,
    series: this.props.series,
    parameters: [],
    Category: [],
    CategoryInput: "",
    ParamsInput: ""
  };

  handleSubmitCat = val => {
    const CategoryInputCopy = [...this.state.Category];
    CategoryInputCopy.push(val);
    this.setState({ Category: CategoryInputCopy });
    this.props.onChangeOption(val);
  };
  handleSubmitPar = val => {
    const ParamsInputCopy = [...this.state.parameters];
    ParamsInputCopy.push(val);
    this.setState({ parameters: ParamsInputCopy });
    this.props.onChangeSeries(val);
  };
  render() {
    //console.log("form render", this.state.option);
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Buttons onSubmit={this.handleSubmitCat} name="Category" />
            <Buttons onSubmit={this.handleSubmitPar} name="Parameter" />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification values={this.state.Category} name={"Category"} />
            <Notification values={this.state.parameters} name={"Parameters"} />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.props.changeNum()}
        >
          show charts
        </button>
      </div>
    );
  }
}

export default form;
