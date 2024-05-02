const ValidateUser = (userName, email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isUserNameValid = userName
    ? /^[A-Za-z][A-Za-z0-9_]{7,12}$/.test(userName)
    : true;

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  if (!isUserNameValid) return "Username is not Valid";

  return null;
};

export { ValidateUser };
