import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await fetch(
          `http://15.165.132.40:8080/api/members/${id}`,
          {
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("NO RESPONSE");
        }
        const memberData = await response.json();
        setMember(memberData);
        setName(memberData.name);
        setAge(memberData.age);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMember();
  }, [id]);

  const handleEdit = async () => {
    try {
      const response = await fetch(
        `http://15.165.132.40:8080/api/members/${id}`,
        {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, age }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update");
      }

      console.log("수정 완");

      setEditing(false);
      setMember({ ...member, name, age });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    if (
      window.confirm("삭제하면 되돌릴 수 없습니다 그래도 삭제하시겠습니까?")
    ) {
      try {
        const response = await fetch(
          `http://15.165.132.40:8080/api/members/${id}`,
          {
            method: "DELETE",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete");
        }
        console.log("삭제 완");
        navigate(-1);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      {member ? (
        <div>
          <h2>Edit Member</h2>
          {editing ? (
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <button onClick={handleEdit}>Save</button>
              <button onClick={() => setEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>Name: {member.name}</p>
              <p>Age: {member.age}</p>
              <button onClick={() => setEditing(true)}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={goBack}>돌아가기</button>
            </div>
          )}
        </div>
      ) : (
        <p>No Info</p>
      )}
    </>
  );
};

export default Edit;
