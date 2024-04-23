import * as React from "react";

function Header() {
  return (
    <header className="flex gap-5 items-start px-8 pt-16 pb-5 w-full text-white bg-teal-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <h1 className="flex-auto text-6xl border border-black border-solid max-md:text-4xl">
        About
      </h1>
      <nav className="flex gap-5 justify-between mt-1.5 text-2xl max-md:flex-wrap max-md:max-w-full">
        <a href="/" className="self-end mt-6">HOME</a>
        <a href="/about" className="my-auto">ABOUT</a>
        <div className="justify-center items-start px-3.5 py-4 whitespace-nowrap bg-zinc-300 text-neutral-500 max-md:pr-5">
          Search
        </div>
        <a href="/signout" className="self-end mt-6">Sign Out</a>
      </nav>
    </header>
  );
}

function Goal() {
  return (
    <section className="flex flex-col px-5 mt-5 text-2xl text-black max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-medium max-md:max-w-full max-md:text-4xl">
        Our Goal
      </h2>
      <p className="mt-28 max-md:mt-10 max-md:max-w-full">
        Universal Buzz aims to create a website to be the foundation for greater connection and collaboration at Sac State. Students at sac state will find easier to connect and communicate with each other. It also functions as a easily accessible platform to find information about upcoming events at Sac State.
      </p>
    </section>
  );
}

function Creators() {
  const creators = [
    "Christopher Parsons",
    "Minh Nguyen", 
    "Alan Mendoza",
    "Vigomar Kim Algador",
    "Gabriel Tan"
  ];

  return (
    <section className="flex flex-col px-5 mt-5 text-2xl text-black max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center mt-28 ml-14 text-4xl text-center underline max-md:mt-10">
        Creators
      </h2>
      <div className="self-center mt-8 ml-16 text-center">
        {creators.map((creator, index) => (
          <React.Fragment key={index}>
            {creator}
            <br />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Images() {
  return (
    <section className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2b3d021933f582bfa42a3031ea790f10c9079b95f866aec6e8808251f4ae844?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
        alt="Sac State campus"
        className="w-full aspect-[2] max-md:max-w-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfa7462a97a6d20efffedcc03ef8b13555dab5bbf39bd1cf4b756676c19bd6b7?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
        alt="Universal Buzz logo"
        className="self-end mt-12 max-w-full aspect-[1.39] fill-teal-950 w-[576px] max-md:mt-10"
      />
    </section>
  );
}
export default function About() {
    return (
      <div className="flex flex-col bg-white">
        <Header />
        <main className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
              <Goal />
              <Creators />
            </div>
            <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
              <Images />
            </div>
          </div>
        </main>
      </div>
    );
  }
