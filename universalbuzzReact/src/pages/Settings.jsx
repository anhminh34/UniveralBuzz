import React from "react";
import "./Settings.css";

export const Settings = () => {
  return (
    <div className="settings">
      <div className="div">
        <div className="form">
          <div className="profile">
            <div className="avatar">
              <img className="rectangle" alt="Rectangle" src="rectangle-1.png" />
            </div>
            <div className="frame">
              <div className="text-wrapper">Helena Hills</div>
              <div className="text-wrapper-2">Change profile photo</div>
            </div>
          </div>
          <div className="input">
            <div className="text-wrapper-3">Display Name</div>
            <div className="field">
              <div className="label">Helena Hills</div>
            </div>
          </div>
          <div className="input">
            <div className="text-wrapper-3">Birthdate</div>
            <div className="field">
              <div className="label">01/01/2001</div>
            </div>
          </div>
          <div className="input">
            <div className="text-wrapper-3">Sex</div>
            <div className="field">
              <div className="label">Female</div>
            </div>
          </div>
          <div className="input">
            <div className="text-wrapper-3">Class</div>
            <div className="field">
              <div className="label">Junior</div>
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input">
              <div className="text-wrapper-3">Phone Number</div>
              <div className="field">
                <div className="label">916-916-9160</div>
              </div>
            </div>
          </div>
          <div className="input">
            <input className="input-title" placeholder="Email" type="email" />
            <input className="label-wrapper" placeholder="email@domain.com" type="email" />
          </div>
          <div className="large-input">
            <div className="text-wrapper-3">About Me</div>
            <div className="text-area">
              <p className="p">Hello! I’m from Porto, Portugal and am currently studying film here. Lets Talk!</p>
            </div>
          </div>
          <button className="button">
            <div className="primary">Save changes</div>
          </button>
        </div>
        <div className="text-wrapper-4">Edit profile</div>
        <div className="sidebar">
          <div className="list">
            <div className="menu-item">
              <img className="img" alt="Home" src="home.svg" />
              <div className="text-wrapper-5">Home</div>
            </div>
          </div>
          <div className="menu-item-2">
            <img className="img" alt="Bookmark" src="bookmark.svg" />
            <div className="text-wrapper-5">Saved Events</div>
          </div>
          <div className="menu-item-3">
            <img className="img" alt="Message circle" src="message-circle.svg" />
            <div className="text-wrapper-5">Chat Rooms</div>
          </div>
          <div className="menu-item-4">
            <img className="image" alt="Image" src="image-4.png" />
            <div className="text-wrapper-5">Profile</div>
          </div>
          <div className="text-wrapper-6">Universal Buzz</div>
        </div>
        <div className="text-wrapper-7">BACK</div>
      </div>
    </div>
  );
};

export default Settings;
