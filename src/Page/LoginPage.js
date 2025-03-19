import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import "./LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      setMessage(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/home"); // Redirect to dashboard after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="form-container">
      <div className="login-box">
        <h2 className="login-title">Login to Your Account</h2>

        {error && <p className="text-red-400">{error}</p>}
        {message && <p className="text-green-400">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        {/* Social Login Buttons */}
       <div className="social-buttons">
         <a href="https://www.spanglesinfotech.com/" target="_blank" rel="noopener noreferrer" className="social-btn">
           <FaGoogle className="social-icon" />
         </a>
         <a href="https://www.facebook.com/SpanglesInfotech" target="_blank" rel="noopener noreferrer" className="social-btn">
           <FaFacebook className="social-icon" />
         </a>
        </div>

        <p className="text-white mt-4">
          Don't have an account?{" "}
          <a href="/" className="text-bold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
