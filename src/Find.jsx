import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
const Find = () => {
  const base = "http://15.165.132.40:8080";
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();
  const getMembers = async () => {
    try {
      const response = await fetch(base + "/api/members", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("NO RESPONSE");
      }
      const memData = await response.json();
      setMembers(memData.data);
    } catch (error) {
      console.log(error);
    }
  };
  const viewDetail = (memberId) => {
    navigate(`/members/${memberId}`);
  };
  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div>
      <h2>멤버 목록</h2>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.age}세</td>
              <td>
                <button onClick={() => viewDetail(member.id)}>상세 정보</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Find;
