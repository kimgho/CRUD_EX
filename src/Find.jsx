import { useState, useEffect } from "react";
const Find = () => {
  const base = "http://15.165.132.40:8080";
  const [members, setMember] = useState([]);
  const getMember = async () => {
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
      const parData = Object.values(memData);
      setMember(parData);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMember();
  }, []);
  return (
    <div>
      <h2>멤버 목록</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            {member.name} - {member.age}세
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Find;
