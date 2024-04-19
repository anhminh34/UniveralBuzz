import * as React from "react";
import "./App.css";
const newsData = [
  {
    image: "universalbuzzReact\src\news-art.jpg",
    title: "News 1",
    content: "News content",
  },
  {
    image: "universalbuzzReact\src\news-art.jpg",
    title: "News 2", 
    content: "Content",
  },
  {
    image: "universalbuzzReact\src\news-art.jpg",
    title: "News 3",
    content: "Content",
  },
];

const eventsData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1332e1cac5799d9f00288076ce7e754cced83eb6cbd4f3ce938197c2e4d2d6e?apiKey=b7659814a0fd475cba3c9d7073a460d7&",
    date: "Mon, April 1",
    title: "Monday Meditation: April (Early Morning)",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cdf5276eda0be9fbf860b85608070eee2cf153a30d9218d734be4ca6249ecd2?apiKey=b7659814a0fd475cba3c9d7073a460d7&",
    date: "Tues, April 2",
    title: "Adaptive Sports: Wheelchair Rugby",
  },
  {
    image: "",
    date: "Date",
    title: "Event",
  },
];

const Header = () => (
  <header className="px-8 pt-16 pb-5 w-full bg-teal-950 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
        <h1 className="text-6xl text-white border border-black border-solid max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          UNIVERSAL BUZZ
        </h1>
      </div>
      <nav className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
        <ul className="flex grow gap-5 justify-between mt-1.5 text-2xl text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <li className="self-end mt-6">HOME</li>
          <li className="my-auto">ABOUT</li>
          <li className="justify-center items-start px-3.5 py-4 whitespace-nowrap bg-zinc-300 text-neutral-500 max-md:pr-5">
            Search
          </li>
          <li className="self-end mt-6">Sign In</li>
        </ul>
      </nav>
    </div>
  </header>
);

const ImageSection = () => (
  <section className="mt-4 w-full max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aef0ae9ff1a4f0afdd8c003cdb07bbe50a375cd4dbaa86ae2e554bfbaba530c8?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
          alt=""
          className="grow w-full aspect-[2] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/59833be6945cb134dc5819cd915b11dd63e29c905ebbc4ad5c4f46d149db3f5c?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
          alt=""
          className="grow w-full aspect-[1.85] max-md:max-w-full"
        />
      </div>
    </div>
  </section>
);

const ProfileSection = () => (
  <section className="flex z-10 flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex flex-col ml-10 max-w-full text-4xl font-bold text-teal-950 w-[586px]">
      <h2 className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
        Welcome Hornets!
      </h2>
      <div className="flex gap-5 mt-6 whitespace-nowrap bg-zinc-300 max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b9553d3ff0d1a2bafd3b8059d6d53ed9c526568f642725d458fbf501f035861?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
          alt=""
          className="shrink-0 aspect-square w-[49px]"
        />
        <div className="flex-auto my-auto max-md:max-w-full">PROFILE</div>
      </div>
      <div className="flex gap-2.5 mt-3.5 whitespace-nowrap bg-zinc-300 max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/919c3a0f99a94c1787805f0f7ba7e7fb185678651917c1e90585fdd068e75fc7?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
          alt=""
          className="shrink-0 aspect-[1.18] w-[54px]"
        />
        <div className="flex-auto my-auto max-md:max-w-full">CHATROOMS</div>
      </div>
      <div className="flex gap-2 mt-5 whitespace-nowrap bg-zinc-300 max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d384d4ae500f586ad4ecd69f22d2880160b28999dc8066c9b724ac4eb737406d?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
          alt=""
          className="shrink-0 aspect-[1.09] w-[50px]"
        />
        <div className="flex-auto my-auto max-md:max-w-full">SETTINGS</div>
      </div>
      <h2 className="mt-14 text-4xl text-black max-md:mt-10 max-md:max-w-full">
        Recent News
      </h2>
    </div>
  </section>
);

const NewsItem = ({ image, title, content }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow pt-5 pb-20 w-full text-2xl text-black rounded-3xl bg-zinc-300 max-md:mt-7">
      <img loading="lazy" src={image} alt="" className="w-full aspect-[1.92]" />
      <div className="flex flex-col self-start mt-8 ml-3 max-md:ml-2.5">
        <h3 className="font-bold">{title}</h3>
        <p className="mt-12 font-medium max-md:mt-10">{content}</p>
      </div>
    </div>
  </div>
);

const NewsSection = () => (
  <section className="flex flex-col py-8 pr-20 pl-10 mt-5 w-full bg-teal-950 max-md:px-5 max-md:max-w-full">
    <div className="max-w-full w-[903px] max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {newsData.map((news, index) => (
          <NewsItem key={index} {...news} />
        ))}
      </div>
    </div>
    <div className="self-center mt-7 ml-36 text-3xl font-semibold text-white">
      More News
    </div>
  </section>
);

const EventItem = ({ image, date, title }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow px-2 py-11 w-full text-2xl text-black rounded-3xl bg-zinc-300 max-md:mt-7">
      {image && (
        <img
          loading="lazy"
          src={image}
          alt=""
          className="w-full aspect-[1.75]"
        />
      )}
      <div className="mt-6 font-bold">{date}</div>
      <div className="mt-5 font-medium">{title}</div>
    </div>
  </div>
);

const EventsSection = () => (
  <section>
    <h2 className="self-start mt-11 ml-8 text-4xl font-bold text-black max-md:mt-10 max-md:ml-2.5">
      Upcoming Events
    </h2>
    <div className="flex flex-col pt-10 pr-20 pb-4 pl-6 mt-3 w-full bg-teal-950 max-md:px-5 max-md:max-w-full">
      <div className="max-w-full w-[929px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {eventsData.map((event, index) => (
            <EventItem key={index} {...event} />
          ))}
        </div>
      </div>
      <div className="self-center mt-6 ml-40 text-3xl font-semibold text-white">
        More Events
      </div>
    </div>
  </section>
);

const ResourcesSection = () => (
  <aside className="flex flex-col grow pt-12 pr-10 pb-20 pl-4 w-full text-3xl font-bold text-black bg-stone-400 max-md:pr-5 max-md:max-w-full">
    <h2 className="text-4xl">Campus Resources</h2>
    <div className="justify-center items-start px-3.5 py-8 mt-7 bg-zinc-300 max-md:pr-5">
      International Services
    </div>
    <div className="justify-center items-start px-3.5 py-7 mt-5 whitespace-nowrap bg-zinc-300 max-md:pr-5">
      Scholarships
    </div>
    <div className="justify-center items-start px-3.5 py-8 mt-5 bg-zinc-300 max-md:pr-5">
      Financial Aid
    </div>
    <div className="justify-center items-start px-3.5 py-7 mt-5 bg-zinc-300 max-md:pr-5">
      Housing Information
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7d90cb5-220a-4b0e-b050-2b3ed5502b15?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
      alt=""
      className="mt-5 w-full aspect-[1.32] max-md:ml-2.5"
    />
    <h3 className="mt-4 text-3xl">Location</h3>
    <p className="mt-7 text-2xl">
      International Programs <br /> Library, Room 1001 Mon. – Fri., 8 a.m. – 5
      p.m.
    </p>
    <div className="justify-center px-14 py-5 mt-3.5 text-2xl font-semibold text-white rounded-3xl bg-teal-950 max-md:pr-7 max-md:pl-5">
      Find us on Campus Map
    </div>
  </aside>
);

const Footer = () => (
  <footer className="px-14 py-16 w-full bg-teal-950 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="text-2xl text-white max-md:mt-10">
          <h3>About Us:</h3>
          </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="text-2xl text-white underline max-md:mt-10">
          Contact Us: <br /> Phone: (916) 278-6686 <br />
          <a
            href="mailto:intlinfo@csus.edu"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            intlinfo@csus.edu
          </a>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="text-2xl text-white max-md:mt-10">Follow Us:</div>
      </div>
    </div>
  </footer>
);

function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <Header/>
      <ImageSection />
      <main className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
            <ProfileSection />
            <NewsSection />
            <EventsSection />
          </div>
          <ResourcesSection />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default MyComponent;