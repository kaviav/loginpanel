import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username: loginUsername,
        password: loginPassword,
      });
      console.log("Login Response:", response.data);
      // Redirect to home page or do something else upon successful login
      navigate("/home");
    } catch (error) {
      console.error("Login Error:", error);
      // Handle login error (show error message to the user, etc.)
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        username: signupUsername,
        password: signupPassword,
        email: signupEmail,
      });
      console.log("Signup Response:", response.data);
      // Redirect to home page or do something else upon successful signup
      navigate("/home");
    } catch (error) {
      console.error("Signup Error:", error);
      // Handle signup error (show error message to the user, etc.)
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button type="submit">LOGIN</button>
        </form>
      </div>
      <div className="signup">
        <h1>SIGN UP</h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={signupUsername}
            onChange={(e) => setSignupUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};
