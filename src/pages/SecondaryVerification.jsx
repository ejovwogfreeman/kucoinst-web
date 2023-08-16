import React, { useState, useEffect } from "react";
import "../css/Settings.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GrDocumentUser } from "react-icons/gr";
import { Link } from "react-router-dom";

const SecondaryVerification = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    verifiedDoc: "",
    verifiedPic: null,
  });

  const { verifiedDoc, verifiedPic } = profile;

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
      verifiedPic: event.target.files[0],
    }));
  };

  const authToken = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
    },
  };

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

    if (!verifiedDoc || !verifiedPic) {
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("verifiedDoc", verifiedDoc);
    formData.append("files", verifiedPic);

    if (user.name === "") {
      setLoading(false);
      return toast.error("PLEASE COMPLETE PRIMARY VERIFICATION FIRST");
    }

    try {
      await axios.post(
        "https://kucoinst-web.onrender.com/api/users/verify",
        formData,
        config
      );
      toast.success("SECONDARY VERIFICATION SUCCESSFUL");
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">DOCUMENT (ID/DRIVERS LISCENCE/UTILITY BILL)</label>
          <div className="d-flex align-items-center border">
            <GrDocumentUser />
            <input
              type="text"
              value={verifiedDoc}
              name="verifiedDoc"
              onChange={handleChange}
              placeholder="Enter Document Type"
            />
          </div>
        </div>
        <label htmlFor="verifiedPic">FILE</label>
        <input
          className="img-input"
          type="file"
          name="verifiedPic"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit" disabled={loading} className="btn btn-dark mt-4">
          {loading ? "VERIFYING..." : "VERIFY"}
        </button>
        <Link to="/primary_verification" className="d-block mt-2 text-center">
          <small>Primary Verification</small>
        </Link>
      </form>
    </div>
  );
};

export default SecondaryVerification;