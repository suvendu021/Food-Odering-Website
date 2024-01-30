import { useState } from "react";

const User = (props) => {
  console.log(props);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(2);

  let incre = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  };

  return (
    <div className="user-container">
      <h3>name:{props.name}</h3>
      <h3>Count1: {count1}</h3>
      <h3>Count2: {count2}</h3>
      <button onClick={incre}>Click</button>
      <h3>address: {props.address}</h3>
      <h3>Email:{props.email}</h3>
    </div>
  );
};
export default User;
