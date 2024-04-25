import * as React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo">About</div>
      <nav className="navigation">
        <a href="/" className="nav-link">
          HOME
        </a>
        <a href="/about" className="nav-link active">
          ABOUT
        </a>
        <div className="search-bar">Search</div>
        <a href="/signout" className="nav-link">
          Sign Out
        </a>
      </nav>

      <style jsx>{`
        .header {
          background-color: #043927;
          display: flex;
          width: 100%;
          align-items: start;
          gap: 20px;
          color: #fff;
          font-weight: 400;
          padding: 65px 32px 21px;
        }

        @media (max-width: 991px) {
          .header {
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }

        .logo {
          -webkit-text-stroke-width: 1;
          -webkit-text-stroke-color: #000;
          border: 1px solid rgba(0, 0, 0, 1);
          flex-grow: 1;
          font: 64px Lilita One, sans-serif;
        }

        @media (max-width: 991px) {
          .logo {
            font-size: 40px;
          }
        }

        .navigation {
          display: flex;
          margin-top: 5px;
          gap: 20px;
          font-size: 25px;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .navigation {
            flex-wrap: wrap;
          }
        }

        .nav-link {
          font-family: Kanit, sans-serif;
          align-self: end;
          margin-top: 23px;
        }

        .nav-link.active {
          margin: auto 0;
        }

        .search-bar {
          font-family: Kanit, sans-serif;
          background-color: rgba(217, 217, 217, 1);
          align-items: start;
          color: #737373;
          white-space: nowrap;
          justify-content: center;
          padding: 16px 13px;
        }

        @media (max-width: 991px) {
          .search-bar {
            padding-right: 20px;
            white-space: initial;
          }
        }
      `}</style>
    </header>
  );
}

function Goal() {
  return (
    <section className="goal">
      <h2 className="section-title">Our Goal</h2>
      <p className="section-description">
        Universal Buzz aims to create a website to be the foundation for
        greater connection and collaboration at Sac State. Students at sac state
        will find easier to connect and communicate with each other. It also
        functions as a easily accessible platform to find information about
        upcoming events at Sac State.
      </p>

      <style jsx>{`
        .goal {
          display: flex;
          margin-top: 21px;
          flex-direction: column;
          font-size: 25px;
          color: #000;
          font-weight: 400;
          padding: 0 20px;
        }

        @media (max-width: 991px) {
          .goal {
            margin-top: 40px;
          }
        }

        .section-title {
          font: 500 48px Kanit, sans-serif;
        }

        @media (max-width: 991px) {
          .section-title {
            font-size: 40px;
          }
        }

        .section-description {
          font-family: Kanit, sans-serif;
          margin-top: 119px;
        }

        @media (max-width: 991px) {
          .section-description {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}

function Creators() {
  const creators = [
    "Christopher Parsons",
    "Minh Nguyen",
    "Alan Mendoza",
    "Vigomar Kim Algador",
    "Gabriel Tan",
  ];

  return (
    <section className="creators">
      <h3 className="section-subtitle">Creators</h3>
      <ul className="creator-list">
        {creators.map((creator, index) => (
          <li key={index} className="creator-item">
            {creator}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .creators {
          text-align: center;
          margin-top: 115px;
        }

        @media (max-width: 991px) {
          .creators {
            margin-top: 40px;
          }
        }

        .section-subtitle {
          text-decoration: underline;
          font: 40px Kanit, sans-serif;
        }

        .creator-list {
          font-family: Kanit, sans-serif;
          margin-top: 30px;
        }
      `}</style>
    </section>
  );
}

function Images() {
  return (
    <div className="image-container">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2b3d021933f582bfa42a3031ea790f10c9079b95f866aec6e8808251f4ae844?apiKey=b7659814a0fd475cba3c9d7073a460d7&" alt="Placeholder image" className="image-1" />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfa7462a97a6d20efffedcc03ef8b13555dab5bbf39bd1cf4b756676c19bd6b7?apiKey=b7659814a0fd475cba3c9d7073a460d7&" alt="Placeholder image" className="image-2" />

      <style jsx>{`
        .image-container {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 55%;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .image-container {
            width: 100%;
            margin-top: 40px;
          }
        }

        .image-1 {
          aspect-ratio: 2;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }

        .image-2 {
          aspect-ratio: 1.39;
          object-fit: auto;
          object-position: center;
          width: 576px;
          fill: #043927;
          align-self: end;
          margin-top: 50px;
          max-width: 100%;
        }

        @media (max-width: 991px) {
          .image-2 {
            margin-top: 40px;
          }
        }
      `}</style>
    </div>
  );
}

function About() {
  return (
    <main className="about-page">
      <Header />
      <div className="content-wrapper">
        <div className="content">
          <Goal />
          <Creators />
        </div>
        <Images />
      </div>

      <style jsx>{`
        .about-page {
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }

        .content-wrapper {
          margin-top: 50px;
          width: 100%;
          gap: 20px;
          display: flex;
        }

        @media (max-width: 991px) {
          .content-wrapper {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
            margin-top: 40px;
          }
        }

        .content {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 45%;
          margin-left: 0px;
        }

        @media (max-width: 991px) {
          .content {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}

export default About;