import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
  }

  render() {
    const { name, address, email } = this.props;
    const { count1, count2 } = this.state;

    return (
      <div className="user-container">
        <h3>name:{name}(class component)</h3>
        <h3>Count1: {count1}</h3>
        <h3>Count2: {count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count1: count1 + 1,
              count2: count2 + 1,
            });
          }}
        >
          Click
        </button>
        <h3>address: {address}</h3>
        <h3>Email:{email}</h3>
      </div>
    );
  }
}
export default UserClass;
