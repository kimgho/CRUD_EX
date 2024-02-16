import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const getMember = async () => {
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
      } catch (error) {
        console.log(error);
      }
    };

    getMember();
  }, [id]);

  return (
    <>
      {member ? (
        <div>
          <h2>Edit Member</h2>
          <p>Name: {member.name}</p>
          <p>Age: {member.age}</p>
        </div>
      ) : (
        <p>No Member</p>
      )}
    </>
  );
};

export default Edit;
