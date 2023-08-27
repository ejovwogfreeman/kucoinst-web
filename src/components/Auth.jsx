const Auth = () => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  return user;
};

export default Auth;
