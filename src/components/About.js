import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constuctor");
  }

  componentDidMount() {
    // console.log("parent componentDidMount");
  }

  render() {
    // console.log("parent render");
    return (
      <div className="about">
        <h1>About US </h1>
        <h3>These are our employee</h3>

        <UserClass />
      </div>
    );
  }
}

// const About = () => {
// const properties = {
//   name: "rajdeep",
//   address: "sompur",
//   email: "test@gamil.com",
// };
//   return (
//     <div className="about">
//       <h1>About US </h1>
//       <h3>This is our website about Section</h3>
//       {/* <User {...properties} /> */}
//       <UserClass {...properties} />
//     </div>
//   );
// };
export default About;
