const Delete = () => {
  const base = "http://15.165.132.40:8080";
  const delMember = 1;
  fetch(base + `/api/members/${delMember}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("DEL ERROR");
      } else {
        console.log("delete OK");
      }
    })
    .catch((e) => {
      console.log(e);
    });
  return <button onClick={Delete}>Delete Member</button>;
};
export default Delete;
