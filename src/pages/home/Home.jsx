import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/newUser");
  };

  const allusers = (e) => {
    e.preventDefault();
    navigate("/users");
  };

  return (
    <div className="home">
      <button onClick={handleClick}>Add User</button>

      <button onClick={allusers} className="userLists">
        Student Lists/ Dasboard
      </button>
    </div>
  );
};
