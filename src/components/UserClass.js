import React from "react";
import { EMPLOYEE_API_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "default",
        location: "default",
      },
    };
    // console.log(this.props.name + "constuctor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "componentDidMount");
    try {
      const apiData = await fetch(EMPLOYEE_API_URL);
      const json = await apiData.json();
      this.setState({
        userData: json.users[1],
      });
    } catch (error) {
      console.log(error);
    }

    // console.log(json);
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate is called");
  }
  componentWillUnmount() {
    // console.log("componentWillUnmounis called");
  }

  render() {
    const { firstName, age, email, image } = this.state.userData;

    return (
      <div className="w-56 p-2 m-2 border border-black">
        <img src={image} style={{ height: "80px" }} />
        <h3 className="font-bold">name: {firstName}</h3>
        <h3>age: {age}</h3>
        <h3>Email: {email}</h3>
      </div>
    );
  }
}
export default UserClass;
