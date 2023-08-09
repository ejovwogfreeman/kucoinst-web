import axios from "axios";

export const registerUser = (user) => {
  axios
    .post("http://localhost:8000/api/auth/register", user, {
      headers: {
        "Content-Type": "application/json",
        Accept: "applicatioon/json",
      },
    })
    .then((res) => {
      alert("REGISTRATION SUCCESSFUL");
      setLoading(false);
      navigate("/");
      localStorage.setItem("user", JSON.stringify(res.data));
    })
    .catch((err) => {
      alert("INCORRECT CREDENTIALS");
      setLoading(false);
    });
};

export const loginUser = (user) => {
  axios
    .post("http://localhost:8000/api/auth/login", user, {
      headers: {
        "Content-Type": "application/json",
        Accept: "applicatioon/json",
      },
    })
    .then((res) => {
      alert("LOGIN SUCCESSFUL");
      setLoading(false);
      navigate("/");
      localStorage.setItem("user", JSON.stringify(res.data));
    })
    .catch((err) => {
      alert("INCORRECT CREDENTIALS");
      setLoading(false);
    });
};
