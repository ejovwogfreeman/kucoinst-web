import React from "react";
import "../css/Settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <form>
        <h3>ACCOUNT SETTINGS</h3>
        <label htmlFor="">USERNAME</label>
        <input type="text" />
        <label htmlFor="">PROFILE PICTURE</label>
        <input type="file" src="" alt="" />
      </form>
    </div>
  );
};

export default Settings;
