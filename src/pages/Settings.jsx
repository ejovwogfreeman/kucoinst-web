import React, { useState, useEffect } from "react";
import "../css/Settings.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import ScrollToTop from "../components/ScrollToTop";

const Settings = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    phoneNum: "",
    profilePic: null,
  });

  const { username, email, phoneNum, profilePic } = profile;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setProfile((prevData) => ({
      ...prevData,
      profilePic: event.target.files[0],
    }));
  };

  const authToken = JSON.parse(sessionStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
      "Content-Type": "multipart/form-data",
    },
  };

  useEffect(() => {
    axios
      .get("https://kucoinst-web.onrender.com/api/users/user", config)
      .then((response) => {
        setUser(response.data);
        console.log(user);
        setProfile({
          ...profile,
          username: response.data.username,
          email: response.data.email,
          phoneNum: response.data.phoneNum,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !email || !profilePic) {
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    setLoading(true);

    if (!user.name || !user.verified) {
      setLoading(false);
      return toast.error(
        "YOU MUST BE VERIFIED IN OTHER TO UPDATE YOUR PROFILE"
      );
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phoneNum", phoneNum);
    formData.append("files", profilePic);

    try {
      await axios.patch(
        // "https://kucoinst-web.onrender.com/api/users/update-user",
        // "http://localhost:8000/api/users/update-user",
        // "http://54.82.1.193/api/users/update-user",
        "https://34.224.57.76/api/users/uspdate-user",
        formData,
        config
      );
      toast.success("PROFILE UPDATED SUCCESSFULLY");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("ERROR UPDATING PROFILE");
      setLoading(false);
    }
  };

  return (
    <div className="settings-container">
      <ScrollToTop />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <div className="d-flex align-items-center border">
            <FaUserCircle />
            <input
              type="text"
              value={username}
              name="username"
              onChange={handleChange}
              placeholder="Enter username"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <div className="d-flex align-items-center border">
            <AiFillMail />
            <input
              type="text"
              value={email}
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Phone Number</label>
          <div className="d-flex align-items-center border">
            <AiFillMail />
            <input
              type="text"
              value={phoneNum}
              name="phoneNum"
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
        </div>
        <label htmlFor="profilePic">PROFILE PICTURE</label>
        <input
          className="img-input"
          type="file"
          name="profilePic"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit" disabled={loading} className="btn btn-dark mt-3">
          {loading ? "UPDATING..." : "UPDATE"}
        </button>
      </form>
    </div>
  );
};

export default Settings;
