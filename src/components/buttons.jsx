import React, { Component } from "react";

class buttons extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    this.setState({ value: "" });
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <div>
        <label>
          {this.props.name}:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </label>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Primary
        </button>
      </div>
    );
  }
}

export default buttons;
