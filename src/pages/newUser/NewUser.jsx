import { useState } from "react";
import "./newUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const NewUser = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/user/addUser",
        inputs
      );
      console.log("User created successfully:", response.data);
      // Optionally, you can reset the form inputs here
      setInputs({});
    } catch (error) {
      console.error("Error creating user:", error);
    }
    navigate("/home");
  };

  return (
    <div className="newuser">
      <h1 className="newUserTitle">Add student</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="terra@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>

        <button className="newUserButton" onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
};
