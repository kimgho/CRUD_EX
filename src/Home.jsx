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
  const handleDelClick = () => {
    navi(`/members/${1}`);
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleFindClick}>Find</button>
      <button onClick={handleRegisterClick}>Register</button>
      <button onClick={handleDelClick}>Delete</button>
    </div>
  );
};

export default Home;
