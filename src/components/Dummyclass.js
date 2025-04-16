import React, { Component } from "react";

export default class Dummyclass extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    return <div>dummyclass {this.props.nameData}</div>;
  }
}
