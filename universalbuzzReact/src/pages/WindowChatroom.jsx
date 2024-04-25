import React from "react";
import "./WindowChatroom.css";

function Windowchatroom() {

  return (
    <div className="window-chatroom">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="members">
            <div className="overlap-group">
              <img className="ellipse" alt="Ellipse" src="/img/windowschatroom/ellipse.svg" />
              <div className="text-wrapper">ONLINE</div>
              <div className="div">OFFLINE</div>
              <div className="text-wrapper-2">Student 2</div>
              <div className="text-wrapper-3">Student 3</div>
              <div className="text-wrapper-4">Student 1</div>
              <div className="text-wrapper-5">You</div>
              <img className="img" alt="Ellipse" src="/img/windowschatroom/ellipse-1.svg" />
              <img className="ellipse-2" alt="Ellipse" src="/img/windowschatroom/ellipse-2.svg" />
              <img className="ellipse-3" alt="Ellipse" src="/img/windowschatroom/ellipse-3.svg" />
            </div>
          </div>
          <div className="text-wrapper-6">CLOSE</div>
          <div className="main-message">
            <div className="overlap-2">
              <div className="rectangle" />
              <img className="polygon" alt="Polygon" src="/img/windowschatroom/polygon-12.svg" />
              <img className="polygon-2" alt="Polygon" src="/img/windowschatroom/polygon-11.svg" />
              <img className="rectangle-2" alt="Rectangle" src="/img/windowschatroom/rectangle-22.svg" />
              <div className="message">
                <div className="overlap-group-2">
                  <p className="p">Hey guys, I was wondering if any of you knew when that football tournament was?</p>
                  <img className="ellipse-4" alt="Ellipse" src="/img/windowschatroom/ellipse-4.svg" />
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-3">
                  <div className="rectangle-3" />
                  <p className="text-wrapper-7">I think it is going to be on April 25th.</p>
                </div>
              </div>
              <div className="text-wrapper-8">Type Message...</div>
            </div>
          </div>
          <div className="your-chatrooms">
            <div className="overlap-4">
              <div className="text-wrapper-9">YOUR CHATROOMS</div>
              <div className="overlap-5">
                <div className="text-wrapper-10">Football Team</div>
                <div className="ellipse-5" />
              </div>
              <div className="overlap-6">
                <div className="text-wrapper-11">Hornet Commons</div>
                <div className="ellipse-5" />
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-12">Student Union</div>
              </div>
              <div className="overlap-7">
                <div className="text-wrapper-13">Women in STEM</div>
              </div>
              <div className="overlap-group-3">
                <img className="polygon-3" alt="Polygon" src="/img/windowschatroom/polygon-9.svg" />
                <img className="polygon-4" alt="Polygon" src="/img/windowschatroom/polygon-10.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Windowchatroom;