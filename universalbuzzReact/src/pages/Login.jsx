import * as React from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">UNIVERSAL BUZZ</h1>
      <h2 className="subtitle">
        Sacramento State <br /> International Students
      </h2>
    </header>
  );
}

function LoginForm() {
  return (
    <form className="login-form">
      <h2 className="form-title">LOGIN</h2>
      <label htmlFor="username" className="visually-hidden">
        Username
      </label>
      <input
        type="text"
        id="username"
        className="form-input"
        placeholder="Username"
      />
      <label htmlFor="password" className="visually-hidden">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="form-input"
        placeholder="Password"
      />
      <button type="submit" className="login-button">
        Login
      </button>
      <div className="register-link">
        <span>Don't have an account?</span>
        <a href="#">Register</a>
      </div>
    </form>
  );
}

function MyComponent() {
  return (
    <>
      <main className="main-container">
        <div className="content-wrapper">
          <section className="left-section">
            <Header />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aa12dfb91641dd7fbe587fbff2268a68982dd2b68e740649dba2335aa757e4e?apiKey=b7659814a0fd475cba3c9d7073a460d7&"
              className="hero-image"
              alt="Hero Image"
            />
          </section>
          <section className="right-section">
            <LoginForm />
          </section>
        </div>
      </main>
      <style jsx>{`
        .main-container {
          background-color: #fff;
          padding-top: 80px;
        }

        .content-wrapper {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .content-wrapper {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .left-section {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 64%;
          margin-left: 0;
        }

        @media (max-width: 991px) {
          .left-section {
            width: 100%;
          }
        }

        .header {
          display: flex;
          margin-top: 123px;
          flex-grow: 1;
          flex-direction: column;
          color: #000;
          padding-left: 80px;
          align-items: start;
        }

        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            margin-top: 40px;
            padding-left: 20px;
          }
        }

        .logo {
          font: 400 80px Lilita One, -apple-system, Roboto, Helvetica, sans-serif;
        }

        @media (max-width: 991px) {
          .logo {
            max-width: 100%;
            font-size: 40px;
          }
        }

        .subtitle {
          margin-top: 23px;
          font: 700 35px Kanit, sans-serif;
        }

        @media (max-width: 991px) {
          .subtitle {
            max-width: 100%;
          }
        }

        .hero-image {
          aspect-ratio: 1.27;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 56px;
        }

        @media (max-width: 991px) {
          .hero-image {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .right-section {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 36%;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .right-section {
            width: 100%;
          }
        }

        .login-form {
          border-radius: 20px;
          background-color: rgba(13, 102, 72, 1);
          display: flex;
          flex-direction: column;
          align-self: stretch;
          font-size: 25px;
          font-weight: 400;
          width: 100%;
          margin: auto 0;
          padding: 73px 49px;
        }

        @media (max-width: 991px) {
          .login-form {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }

        .form-title {
          color: #fff;
          align-self: center;
          font: 40px Kanit, sans-serif;
        }

        .form-input {
          font-family: Kanit, sans-serif;
          background-color: #d9d9d9;
          margin-top: 54px;
          color: #737373;
          justify-content: center;
          padding: 15px;
        }

        @media (max-width: 991px) {
          .form-input {
            margin-top: 40px;
          }
        }

        .login-button {
          font-family: Kanit, sans-serif;
          background-color: #000;
          margin-top: 41px;
          align-items: center;
          color: #fff;
          justify-content: center;
          padding: 16px 60px;
        }

        @media (max-width: 991px) {
          .login-button {
            margin-top: 40px;
            padding: 0 20px;
          }
        }

        .register-link {
          align-self: center;
          display: flex;
          margin-top: 34px;
          gap: 8px;
          font-size: 15px;
        }

        .register-link span {
          color: #fff;
          font-family: Kanit, sans-serif;
          flex-grow: 1;
        }

        .register-link a {
          color: #ead89b;
          font-family: Kanit, sans-serif;
        }

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
      `}</style>
    </>
  );
}
export default MyComponent;
