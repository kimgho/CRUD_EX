import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navi = useNavigate();

  const handleFindClick = () => {
    navi("/members");
  };

  const handleRegisterClick = () => {
    navi("/addForm");
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleFindClick}>Find</button>
      <button onClick={handleRegisterClick}>Register</button>
    </div>
  );
};

export default Home;
