const Auth = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return user;
};

export default Auth;
