import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import EventMiniFrame from "../components/EventMiniFrame";
import PortalPopup from "../components/PortalPopup";
import './Home.css';


const Homepage = () => {
  	const [isEventMiniFrameOpen, setEventMiniFrameOpen] = useState(false);
  	const navigate = useNavigate();
  	const onMoreEventsTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const openEventMiniFrame = useCallback(() => {
    		setEventMiniFrameOpen(true);
  	}, []);
  	
  	const closeEventMiniFrame = useCallback(() => {
    		setEventMiniFrameOpen(false);
  	}, []);
  	
  	
  	const onMoreNewsTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onCampusResourcesContainerClick = useCallback(() => {
    		const anchor = document.querySelector("[data-scroll-to='campusResourcesBorder']");
    		if(anchor) {
      			anchor.scrollIntoView({"block":"start","behavior":"smooth"}) }
  	}, []);
  	
  	
  	const onFindUsOnClick = useCallback(() => {
    		window.open("https://www.csus.edu/campusmap/");
  	}, []);
  	
  	
  	const onHousingInformationContainerClick = useCallback(() => {
    		window.open("https://www.csus.edu/student-life/housing/");
  	}, []);
  	
  	
  	const onFinancialAidContainerClick = useCallback(() => {
    		window.open("https://www.csus.edu/apply/financial-aid-scholarships/");
  	}, []);
  	
  	
  	const onScholarshipsContainerClick = useCallback(() => {
    		window.open("https://csus.academicworks.com/");
  	}, []);
  	
  	
  	const onInternationalServicesTextClick = useCallback(() => {
    		window.open("https://www.csus.edu/international-programs-global-engagement/international-student-scholar-services/");
  	}, []);
  	
  	
  	const onSettingsButtonContainerClick = useCallback(() => {
    		// Add your code here
        navigate('../Settings');
  	}, []);
  	
  	
  	const onChatroomButtonContainerClick = useCallback(() => {
    		// Add your code here
        navigate('../MainChatroom');
  	}, []);
  	
  	
  	const onProfileButtonContainerClick = useCallback(() => {
    		// Add your code here
        navigate('../Profile');
  	}, []);
  	
  	
  	const onABOUTTextClick = useCallback(() => {
    		// Add your code here
        navigate('../About');
  	}, []);
  	
  	
  	const onSignOutTextClick = useCallback(() => {
    		// Add your code here
        navigate('../Login');
  	}, []);
  	
  	return (<>
    		<div className="homepage">
      			<div className="footer">
        				<div className="footer-child" />
        				<div className="about-us">About Us:</div>
        				<div className="follow-us">Follow Us:</div>
        				<div className="contact-us-phone-container">
          					<p className="contact-us">Contact Us:</p>
          					<p className="contact-us">Phone: (916) 278-6686</p>
          					<p className="contact-us">
            						<a className="intlinfocsusedu1" href="mailto:intlinfo@csus.edu" target="_blank">
              							<span className="intlinfocsusedu2">intlinfo@csus.edu</span>
            						</a>
          					</p>
        				</div>
      			</div>
      			<div className="event">
        				<img className="event-border-icon" alt="" src="./img/homepage/Event Border.png" />
        				<div className="more-events" onClick={onMoreEventsTextClick}>More Events</div>
        				<div className="event-3">
          					<img className="events-rectangle-icon" alt="" src="./img/homepage/Events Rectangle.png" />
          					<div className="event1">Event</div>
          					<b className="date">Date</b>
        				</div>
        				<div className="event-2">
          					<img className="events-rectangle-icon" alt="" src="./img/homepage/Events Rectangle.png" />
          					<div className="adaptive-sports-wheelchair">Adaptive Sports: Wheelchair Rugby</div>
          					<b className="tues-april-2">Tues, April 2</b>
          					<img className="event-image-2-icon" alt="" src="./img/homepage/Event-image-2.png" />
        				</div>
        				<div className="event-1" onClick={openEventMiniFrame}>
          					<img className="events-rectangle-icon2" alt="" src="./img/homepage/Events Rectangle.png" />
          					<div className="monday-meditation-april">Monday Meditation: April (Early Morning)</div>
          					<b className="mon-april-1">Mon, April 1</b>
          					<img className="event-image-1-icon" alt="" src="./img/homepage/Event-image-1.png" />
        				</div>
        				<b className="upcoming-events">Upcoming Events</b>
      			</div>
      			<div className="news">
        				<img className="news-border-icon" alt="" src="./img/homepage/News Border.png" />
        				<div className="more-news" onClick={onMoreNewsTextClick}>More News</div>
        				<div className="news-3">
          					<img className="events-rectangle-icon" alt="" src="./img/homepage/News Rectangle.png" />
          					<div className="content">Content</div>
          					<b className="news-31">News 3</b>
          					<img className="news-image-3-icon" alt="" src="./img/homepage/News-image-3.png" />
        				</div>
        				<div className="news-2">
          					<img className="events-rectangle-icon" alt="" src="./img/homepage/News Rectangle.png" />
          					<div className="content1">Content</div>
          					<b className="news-21">News 2</b>
          					<img className="news-image-2-icon" alt="" src="./img/homepage/News-image-2.png" />
        				</div>
        				<div className="news-1">
          					<img className="events-rectangle-icon" alt="" src="./img/homepage/News Rectangle.png" />
          					<div className="news-content">News content</div>
          					<b className="news-11">News 1</b>
          					<img className="news-image-1-icon" alt="" src="./img/homepage/News-image-1.png" />
        				</div>
        				<b className="upcoming-events">Recent News</b>
      			</div>
      			<div className="campus-resources" onClick={onCampusResourcesContainerClick}>
        				<img className="campus-resources-border" alt="" src="./img/homepage/Campus Resources Border.png" data-scroll-to="campusResourcesBorder" />
        				<div className="location">
          					<img className="map-link-border" alt="" src="./img/homepage/Map Link Border.png" />
          					<div className="find-us-on" onClick={onFindUsOnClick}>Find us on Campus Map</div>
          					<div className="international-programs-library-container">
            						<p className="contact-us">{`International Programs `}</p>
            						<p className="contact-us">Library, Room 1001</p>
            						<p className="contact-us">Mon. – Fri., 8 a.m. – 5 p.m.</p>
          					</div>
          					<b className="location1">Location</b>
          					<img className="campus-image-icon" alt="" src="./img/homepage/Campus-image.png" />
        				</div>
        				<div className="clubs-organizations">
          					<img className="clubs-border-icon" alt="" src="./img/homepage/Clubs Border.png" />
          					<b className="clubs-organizations1">{`Clubs & Organizations`}</b>
        				</div>
        				<div className="housing-information" onClick={onHousingInformationContainerClick}>
          					<img className="clubs-border-icon" alt="" src="./img/homepage/Housing Border.png" />
          					<b className="housing-information1">Housing Information</b>
        				</div>
        				<div className="financial-aid" onClick={onFinancialAidContainerClick}>
          					<img className="clubs-border-icon" alt="" src="./img/homepage/Financial Aid Border.png" />
          					<b className="financial-aid1">Financial Aid</b>
        				</div>
        				<div className="scholarships" onClick={onScholarshipsContainerClick}>
          					<img className="clubs-border-icon" alt="" src="./img/homepage/Scholarships Border.png" />
          					<b className="scholarships1">Scholarships</b>
        				</div>
        				<div className="international-services">
          					<img className="clubs-border-icon" alt="" src="./img/homepage/International Services Border.png" />
          					<b className="international-services1" onClick={onInternationalServicesTextClick}>International Services</b>
        				</div>
        				<b className="campus-resources1">Campus Resources</b>
      			</div>
      			<div className="settings-button" onClick={onSettingsButtonContainerClick}>
        				<div className="settings-border" />
        				<b className="settings-button1">SETTINGS</b>
      			</div>
      			<div className="chatroom-button" onClick={onChatroomButtonContainerClick}>
        				<div className="settings-border" />
        				<b className="chatrooms">CHATROOMS</b>
      			</div>
      			<div className="profile-button" onClick={onProfileButtonContainerClick}>
        				<div className="profile-border" />
        				<b className="profile">PROFILE</b>
      			</div>
      			<b className="welcome-name">Welcome, NAME!</b>
      			<img className="image-4-icon" alt="" src="./img/homepage/image 4.png" />
      			<img className="settings-icon" alt="" src="./img/homepage/Settings.png" />
      			<img className="message-circle-icon" alt="" src="./img/homepage/message-circle.png" />
      			<img className="header-image-2-icon" alt="" src="./img/homepage/Header-image-2.png" />
      			<img className="header-image-1-icon" alt="" src="./img/homepage/Header-image-1.png" />
      			<div className="header">
                <img alt="" src="./img/homepage/Rectangle 1.png" />
        				<div className="header-child" />
        				<div className="universal-buzz">UNIVERSAL BUZZ</div>
        				<div className="home">HOME</div>
        				<div className="about" onClick={onABOUTTextClick}>ABOUT</div>
        				<div className="sign-out" onClick={onSignOutTextClick}>Sign Out</div>
        				<div className="search">
          					<img className="search-space-icon" alt="" src="./img/homepage/Search Space.png" />
          					<div className="search1">Search</div>
        				</div>
      			</div>
    		</div>
    		{isEventMiniFrameOpen && (
      			<PortalPopup
        				overlayColor="rgba(113, 113, 113, 0.3)"
        				placement="Centered"
        				
        				
        				
        				
        				
        				onOutsideClick={closeEventMiniFrame}
        				>
        				<EventMiniFrame onClose={closeEventMiniFrame} />
      			</PortalPopup>
    		)}</>);
};

export default Homepage;