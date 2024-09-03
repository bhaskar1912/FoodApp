import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount is called");
  }
  render() {
    return (
      <div>
        About Class
        <UserClass
          component={"class component"}
          name={"Ravi"}
          contact={"1234567890"}
        />
      </div>
    );
  }
}

export default About;
