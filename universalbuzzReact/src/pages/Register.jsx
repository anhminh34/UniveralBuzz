import * as React from "react";

function UniversalBuzzLogo() {
  return (
    <div className="logo-container">
      <div className="logo-text">UNIVERSAL BUZZ</div>
      <div className="logo-subtext">
        Sacramento State <br /> International Students
      </div>
    </div>
  );
}

function RegisterForm() {
  return (
    <form className="register-form">
      <h2 className="form-title">Create an Account</h2>
      <label htmlFor="username" className="visually-hidden">
        Username
      </label>
      <input
        type="text"
        id="username"
        className="form-input"
        placeholder="Username"
        aria-label="Username"
      />
      <label htmlFor="email" className="visually-hidden">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        className="form-input"
        placeholder="Email Address"
        aria-label="Email Address"
      />
      <label htmlFor="password" className="visually-hidden">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="form-input"
        placeholder="Password"
        aria-label="Password"
      />
      <label htmlFor="confirmPassword" className="visually-hidden">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        className="form-input"
        placeholder="Confirm Password"
        aria-label="Confirm Password"
      />
      <button type="submit" className="form-button">
        Register
      </button>
      <div className="form-link">Go back</div>
    </form>
  );
}

function MyComponent() {
  return (
    <>
      <main className="main-container">
        <div className="content-wrapper">
          <section className="left-section">
            <div className="left-content">
              <UniversalBuzzLogo />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c21893c139ae660a9a2078cdb20d51727270eb800471cef980f09be1cbcdcbf?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
                className="hero-image"
                alt="Universal Buzz hero image"
              />
            </div>
          </section>
          <section className="right-section">
            <div className="right-content">
              <RegisterForm />
              <div className="back-link">BACK</div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .main-container {
          background-color: #fff;
          padding: 80px 27px 0 0;
        }

        @media (max-width: 991px) {
          .main-container {
            padding: 80px 20px 0;
          }
        }

        .content-wrapper {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .content-wrapper {
            flex-direction: column;
            gap: 0;
          }
        }

        .left-section {
          width: 59%;
        }

        @media (max-width: 991px) {
          .left-section {
            width: 100%;
          }
        }

        .left-content {
          display: flex;
          flex-direction: column;
          margin-top: 127px;
          color: #000;
        }

        @media (max-width: 991px) {
          .left-content {
            margin-top: 40px;
          }
        }

        .logo-container {
          padding-left: 80px;
        }

        @media (max-width: 991px) {
          .logo-container {
            padding-left: 20px;
          }
        }

        .logo-text {
          font: 400 80px Lilita One, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .logo-text {
            font-size: 40px;
          }
        }

        .logo-subtext {
          margin-top: 23px;
          font: 700 35px Kanit, sans-serif;
        }

        .hero-image {
          width: 100%;
          margin-top: 52px;
          aspect-ratio: 1.14;
          object-fit: cover;
        }

        @media (max-width: 991px) {
          .hero-image {
            margin-top: 40px;
          }
        }

        .right-section {
          width: 41%;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .right-section {
            width: 100%;
            margin-left: 0;
          }
        }

        .right-content {
          display: flex;
          flex-direction: column;
          margin-top: 147px;
        }

        @media (max-width: 991px) {
          .right-content {
            margin-top: 40px;
          }
        }

        .register-form {
          border-radius: 20px;
          background-color: rgba(13, 102, 72, 1);
          padding: 73px 54px;
          color: #737373;
          font-size: 25px;
          font-family: Kanit, sans-serif;
        }

        @media (max-width: 991px) {
          .register-form {
            padding: 40px 20px;
          }
        }

        .form-title {
          color: #fff;
          font-size: 40px;
          margin: 0;
        }

        .form-input {
          background-color: #d9d9d9;
          margin-top: 33px;
          padding: 14px;
          border: none;
          font-family: inherit;
        }

        .form-button {
          background-color: #000;
          color: #fff;
          margin-top: 33px;
          padding: 16px 60px;
          border: none;
          font-family: inherit;
          cursor: pointer;
        }

        .form-link {
          color: #ead89b;
          text-align: center;
          margin: 28px 0 13px;
          font-size: 18px;
        }

        .back-link {
          color: #043927;
          align-self: flex-end;
          margin-top: 86px;
          font: 32px Lilita One, sans-serif;
        }

        @media (max-width: 991px) {
          .back-link {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}
export default MyComponent;