import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "locDummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yashas8197");

    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h1>location: {location}</h1>
      </div>
    );
  }
}

export default UserClass;
