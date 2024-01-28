import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  const properties = {
    name: "rajdeep",
    address: "sompur",
    email: "test@gamil.com",
  };
  return (
    <div className="about">
      <h1>About US </h1>
      <h3>This is our website about Section</h3>
      <User {...properties} />
      <UserClass {...properties} />
    </div>
  );
};
export default About;
