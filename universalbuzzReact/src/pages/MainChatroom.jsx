import React from "react";
import "./MainChatroom.css";

export const MainChatroom = () => {
  return (
    <div className="main-chatroom">
      <div className="div">
        <div className="text-wrapper">BACK</div>
        <div className="overlap">
          <div className="your-room">
            <div className="overlap-group">
              <div className="text-wrapper-2">YOUR CHATROOMS</div>
              <div className="overlap-2">
                <div className="text-wrapper-3">Football Team</div>
                <div className="ellipse" />
              </div>
              <div className="overlap-3">
                <div className="text-wrapper-4">Hornet Commons</div>
                <div className="ellipse" />
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-5">Student Union</div>
              </div>
              <div className="overlap-4">
                <div className="text-wrapper-6">Women in STEM</div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-5">
              <div className="text-wrapper-7">EXPLORE CHATROOMS</div>
              <div className="overlap-6">
                <div className="text-wrapper-8">International Medicine</div>
              </div>
              <div className="overlap-group-2">
                <div className="text-wrapper-9">Data Science Club</div>
              </div>
              <div className="overlap-7">
                <div className="text-wrapper-9">Photography</div>
              </div>
              <div className="overlap-8">
                <div className="text-wrapper-10">APIDA Room</div>
              </div>
            </div>
          </div>
          <img className="polygon" alt="Polygon" src="polygon-7.svg" />
          <img className="img" alt="Polygon" src="polygon-8.svg" />
        </div>
        <div className="overlap-9">
          <div className="room-invitation">
            <div className="overlap-10">
              <div className="text-wrapper-11">ROOM INVITATIONS</div>
              <div className="overlap-group-3">
                <div className="text-wrapper-12">Hogwarts</div>
              </div>
            </div>
          </div>
          <div className="delete-button">
            <div className="overlap-11">
              <div className="rectangle" />
              <div className="text-wrapper-13">Decline</div>
            </div>
          </div>
          <div className="publish-button">
            <div className="overlap-11">
              <div className="rectangle-2" />
              <div className="text-wrapper-14">Accept</div>
            </div>
          </div>
        </div>
        <header className="header">
          <div className="overlap-12">
            <div className="text-wrapper-15">HOME</div>
            <div className="text-wrapper-16">ABOUT</div>
            <div className="text-wrapper-17">Sign Out</div>
            <div className="search">
              <input className="input" placeholder="Search" type="text" />
            </div>
            <div className="text-wrapper-18">CHAT ROOMS</div>
          </div>
        </header>
        <div className="overlap-13">
          <img className="rectangle-3" alt="Rectangle" src="rectangle-19.svg" />
          <div className="rectangle-4" />
          <div className="text-wrapper-19">OPTIONS</div>
          <div className="text-wrapper-20">Create a new chat:</div>
          <div className="text-wrapper-21">Enter chat name</div>
          <img className="polygon-2" alt="Polygon" src="polygon-5.svg" />
        </div>
        <div className="overlap-14">
          <img className="rectangle-5" alt="Rectangle" src="rectangle-20.svg" />
          <div className="text-wrapper-22">Select or enter name</div>
          <div className="rectangle-6" />
          <div className="text-wrapper-23">Request to join chat:</div>
          <img className="polygon-3" alt="Polygon" src="polygon-6.svg" />
        </div>
      </div>
    </div>
  );
};

export default MainChatroom;