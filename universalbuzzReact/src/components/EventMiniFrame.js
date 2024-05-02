import './EventMiniFrame.css';

const EventMiniFrame = () => {
  	return (
    		<div className="event-mini-frame">
      			<div className="monday-meditation-april1">Monday Meditation: April (Early Morning)</div>
      			<div className="in-these-sessions">{`In these sessions, Zen meditation practitioner, Florian Brody explains what mindful meditation is, why it’s important, and how it can help increase your self-awareness and manage stress. Brody will lead attendees through a guided meditation and finish the session with a Q&A.`}</div>
      			<b className="monday-april-1st">Monday, April 1st    6-7AM</b>
      			<div className="x">X</div>
      			<img className="image-5-icon" alt="" src="image 5.png" />
      			<div className="publish-button">
        				<div className="publish-button-child" />
        				<div className="register">Register</div>
      			</div>
      			<img className="bookmark-icon" alt="" src="bookmark.svg" />
    		</div>);
};

export default EventMiniFrame;
