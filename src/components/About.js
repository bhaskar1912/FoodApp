import React, { Component } from "react";
import UserClass from "./UserClass";
import Dummyclass from "./Dummyclass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount is called");
  }
  render() {
    return (
      <>
        <Dummyclass nameData={"kya chal rha hai"} />
        <div>
          About Class
          <UserClass
            component={"class component"}
            name={"Ravi"}
            contact={"1234567890"}
          />
        </div>
      </>
    );
  }
}

export default About;
