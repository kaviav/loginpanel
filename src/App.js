import React from "react";
import "./app.css";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
// import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/NewUser";
import { Login } from "./pages/login/Login";

export const App = () => {
  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser?.isAdmin;
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          {/* <Route path="/user/:id" element={<User />} /> */}

          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </Router>
    </div>
  );
};
