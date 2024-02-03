import { useState } from "react";

const Register = () => {
  const base = "http://15.165.132.40:8080";
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const onNameHandler = (e) => {
    setName(e.target.value);
  };
  const onAgeHandler = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch(base + "/api/addForm", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, age: age }),
      });
      if (!res.ok) {
        throw new Error("NO REGISTER");
      }
      window.location.href = "/";
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <label htmlFor="nameInput">이름:</label>
      <input type="text" id="nameInput" value={name} onChange={onNameHandler} />
      <label htmlFor="ageInput">나이:</label>
      <input type="number" id="ageInput" value={age} onChange={onAgeHandler} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
};

export default Register;
