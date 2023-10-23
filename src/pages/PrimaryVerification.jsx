import React, { useState, useEffect } from "react";
import "../css/Settings.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const PrimaryVerification = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    address: "",
  });

  const { name, address } = profile;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const authToken = JSON.parse(sessionStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
    },
  };

  console.log(config);

  useEffect(() => {
    axios
      .get("https://kucoinst-web.onrender.com/api/users/user", config)
      .then((response) => {
        setUser(response.data);
        console.log(user);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !address) {
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    setLoading(true);

    if (user.name) {
      setLoading(false);
      return toast.error("THIS USER HAS DONE PRIMARY VERIFICATION ALREADY");
    }

    try {
      await axios.patch(
        "https://kucoinst-web.onrender.com/api/users/update-user",
        profile,
        config
      );
      toast.success("PRIMARY VERIFICATION SUCCESSFUL");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("ERROR VERIFYING");
      setLoading(false);
    }
  };

  return (
    <div className="settings-container">
      <ScrollToTop />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Full Name</label>
          <div className="d-flex align-items-center border">
            <FaUserCircle />
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleChange}
              placeholder="Enter Full Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Address</label>
          <div className="d-flex align-items-center border">
            <MdOutlineLocationOn />
            <input
              type="text"
              value={address}
              name="address"
              onChange={handleChange}
              placeholder="Enter address"
            />
          </div>
        </div>
        <button type="submit" disabled={loading} className="btn btn-dark mt-3">
          {loading ? "VERIFYING..." : "VERIFY"}
        </button>
        <Link to="/secondary_verification" className="d-block mt-2 text-center">
          <small>Secondary Verification</small>
        </Link>
      </form>
    </div>
  );
};

export default PrimaryVerification;
