import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleFindClick = () => {
    navigate("/members");
  };

  const handleRegisterClick = () => {
    navigate("/addForm");
  };

  return (
    <div className="container">
      <h2 className="heading">여긴 홈</h2>
      <div className="buttonContainer">
        <button className="button" onClick={handleFindClick}>
          멤버 조회
        </button>
        <button className="button" onClick={handleRegisterClick}>
          등록
        </button>
      </div>
    </div>
  );
};

export default Home;
