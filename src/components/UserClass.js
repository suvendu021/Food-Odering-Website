import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, address, email } = this.props;

    return (
      <div className="user-container">
        <h3>name:{name}</h3>
        <h3>address: {address}</h3>
        <h3>Email:{email}</h3>
      </div>
    );
  }
}
export default UserClass;
