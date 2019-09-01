import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Notification = props => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{props.name}:</span>
          <ul className="online-users">
            {props.values &&
              props.values.map(v => {
                return <li key={v}>{v}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
