import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Bhaskar",
        location: "MP",
        avatar_url: "https://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/akshaymarch7");
    // const json = await data.json();
    // this.setState({
    //   userInfo: json,
    // });
    // this.timer = setInterval(() => {
    //   console.log("valar morghulis");
    // }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      //
    }
    console.log("component did update");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("component will unmount");
  }
  render() {
    const { component } = this.props;
    const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>hello from user :{component}</h1>
        <h2>{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase
        </button>
        <h2>Nmae: {name}</h2>
        <img src={avatar_url} alt="image" />
        <h2>Location: {location}</h2>
      </div>
    );
  }
}
