import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const base = "http://15.165.132.40:8080";
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nameState, setNameState] = useState({
    invalid: false,
    errMsg: "",
  });
  const [ageState, setAgeState] = useState({
    invalid: false,
    errMsg: "",
  });
  const navigate = useNavigate();

  const onNameHandler = (e) => {
    setName(e.target.value);
    setNameState({ ...nameState, invalid: false });
  };

  const onAgeHandler = (e) => {
    setAge(e.target.value);
    setAgeState({ ...ageState, invalid: false });
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
              setNameState({
                invalid: true,
                errMsg: `${err[field]}`,
              });
            }
            if (field === "age") {
              setAgeState({
                invalid: true,
                errMsg: `${err[field]}`,
              });
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
        className={nameState.invalid ? "input invalid" : "input"}
        type="text"
        id="nameInput"
        value={name}
        onChange={onNameHandler}
      />
      {nameState.invalid && (
        <div className="error-message">{nameState.errMsg}</div>
      )}{" "}
      <label className="label" htmlFor="ageInput">
        나이:
      </label>
      <input
        className={ageState.invalid ? "input invalid" : "input"}
        type="number"
        id="ageInput"
        value={age}
        onChange={onAgeHandler}
      />
      {ageState.invalid && (
        <div className="error-message">{ageState.errMsg}</div>
      )}{" "}
      <button className="button" onClick={handleSubmit}>
        등록
      </button>
    </div>
  );
};

export default Register;
