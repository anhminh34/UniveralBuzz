import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here you can perform authentication
    // For simplicity, let's just check if both username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      navigate('../Home');
    } else {
      alert('Invalid username or password');
    }
  };

    return (
        <div className="login-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="group">
                        <div className="overlap-group">
                            <img className="polygon" alt="Polygon" src="/img/loginpage/Polygon 13.png" />
                            <img className="img" alt="Polygon" src="/img/loginpage/Polygon 5.png" />
                            <img className="polygon-2" alt="Polygon" src="/img/loginpage/Polygon 9.png" />
                            <img className="polygon-3" alt="Polygon" src="/img/loginpage/Polygon 12.png" />
                            <img className="polygon-4" alt="Polygon" src="/img/loginpage/Polygon 11.png" />
                            <img className="polygon-5" alt="Polygon" src="/img/loginpage/Polygon 10.png" />
                        </div>
                    </div>
                    <div className="overlap-group-wrapper">
                        <div className="div">
                            <img className="polygon-6" alt="Polygon" src="/img/loginpage/Polygon 3.png" />
                            <img className="polygon-7" alt="Polygon" src="/img/loginpage/Polygon 4.png" />
                            <img className="polygon-8" alt="Polygon" src="/img/loginpage/Polygon 6.png" />
                            <img className="polygon-9" alt="Polygon" src="/img/loginpage/Polygon 1.png" />
                            <img className="polygon-10" alt="Polygon" src="/img/loginpage/Polygon 2.png" />
                            <img className="polygon-11" alt="Polygon" src="/img/loginpage/Polygon 7.png" />
                            <img className="polygon-12" alt="Polygon" src="/img/loginpage/Polygon 4-1.png" />
                        </div>
                    </div>
                    <div className="sacramento-state">
                        Sacramento State
                        <br />
                        International Students
                    </div>
                    <div className="text-wrapper">UNIVERSAL BUZZ</div>
                    <div className="rectangle">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;