import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      setMessage(res.data.message);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Your Account</h2>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input-field"
              onChange={handleChange}
              required
            />
            <label className="input-label">Username</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              onChange={handleChange}
              required
            />
            <label className="input-label">Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-field"
              onChange={handleChange}
              required
            />
            <label className="input-label">Password (4-digit)</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input-field"
              onChange={handleChange}
              required
            />
            <label className="input-label">Location</label>
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <div className="social-buttons">
  <a href="https://www.spanglesinfotech.com/" target="_blank" rel="noopener noreferrer" className="social-btn">
    <FaGoogle className="social-icon" />
  </a>
  <a href="https://www.facebook.com/SpanglesInfotech" target="_blank" rel="noopener noreferrer" className="social-btn">
    <FaFacebook className="social-icon" />
  </a>
</div>

        <p className="login-link">
          Already have an account?
          <a href="/login"> Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
