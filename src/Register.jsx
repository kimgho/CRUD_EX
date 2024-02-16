import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const base = "http://15.165.132.40:8080";
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nameInvalid, setNameInvalid] = useState(false);
  const [nameErrMsg, setNameErrMsg] = useState("");
  const [ageInvalid, setAgeInvalid] = useState(false);
  const [ageErrMsg, setAgeErrMsg] = useState("");
  const navigate = useNavigate();

  const onNameHandler = (e) => {
    setName(e.target.value);
    setNameInvalid(false);
  };

  const onAgeHandler = (e) => {
    setAge(e.target.value);
    setAgeInvalid(false);
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
        const err = await res.json();
        if (err && typeof err === "object") {
          for (const field in err) {
            if (field === "name") {
              setNameInvalid(true);
              setNameErrMsg(`${err[field]}`);
            }
            if (field === "age") {
              setAgeInvalid(true);
              setAgeErrMsg(`${err[field]}`);
            }
          }
        } else {
          alert("ERR");
        }
        return;
      }
      alert("등록 완");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <label className="label" htmlFor="nameInput">
        이름:
      </label>
      <input
        className={nameInvalid ? "input invalid" : "input"}
        type="text"
        id="nameInput"
        value={name}
        onChange={onNameHandler}
      />
      {nameInvalid && <div className="error-message">{nameErrMsg}</div>}{" "}
      <label className="label" htmlFor="ageInput">
        나이:
      </label>
      <input
        className={ageInvalid ? "input invalid" : "input"}
        type="number"
        id="ageInput"
        value={age}
        onChange={onAgeHandler}
      />
      {ageInvalid && <div className="error-message">{ageErrMsg}</div>}{" "}
      <button className="button" onClick={handleSubmit}>
        등록
      </button>
    </div>
  );
};

export default Register;
