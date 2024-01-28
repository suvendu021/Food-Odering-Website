import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-container">
        <h3>name:{this.props.name}</h3>
        <h3>address: {this.props.address}</h3>
        <h3>Email:{this.props.email}</h3>
      </div>
    );
  }
}
export default UserClass;
