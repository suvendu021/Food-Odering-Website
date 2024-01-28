const User = (props) => {
  console.log(props);
  return (
    <div className="user-container">
      <h3>name:{props.name}</h3>
      <h3>address: {props.address}</h3>
      <h3>Email:{props.email}</h3>
    </div>
  );
};
export default User;
