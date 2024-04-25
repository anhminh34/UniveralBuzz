import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

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

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here you can perform authentication
    // For simplicity, let's just check if both username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      navigate('./Home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
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
            <form className="login-form">
              <h2 className="form-title">LOGIN</h2>
              <label htmlFor="username" className="visually-hidden">
                Username
              </label>
              <input type="text" placeholder="Username" id="username" className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)} required
              />
              <label htmlFor="password" className="visually-hidden">
                Password
              </label>
              <input
                type="password" placeholder="Password" id="password" className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)} required
              />
              <button className="login-button" onClick={handleLogin}>Login</button>
              <div className="register-link">
                <span>Don't have an account?</span>
                <a href="./Register">Register</a>
              </div>
            </form>
          </section>
        </div>
      </main>
  );
}

export default Login;