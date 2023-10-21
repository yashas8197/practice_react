import { Component } from "react";
import UserClass from "./UserInfoClass";
class AboutClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserClass />
      </div>
    );
  }
}

export default AboutClass;
