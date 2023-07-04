import { Link, useParams } from "react-router-dom";
import { getUser } from "../../services/api";
import { useEffect, useState } from "react";
export default function Update() {
  const [updateItem, setUpdateItem] = useState([]);
  const paramsId = useParams();
  const data = async () => {
    const item = await getUser(paramsId.id);
    setUpdateItem(item);
  };
  useEffect(() => {
    data();
  }, [paramsId.id]);

  function Update(id) {
    let firstName = document.getElementById("exampleFormControlInput1").value;
    let maidenName = document.getElementById("exampleFormControlInput2").value;
    let lastName = document.getElementById("exampleFormControlInput3").value;
    let email = document.getElementById("exampleFormControlInput4").value;
    let phone = document.getElementById("exampleFormControlInput5").value;
    fetch(`https://dummyjson.com/users/${id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: `${firstName}`,
        maidenName: `${maidenName}`,
        lastName: `${lastName}`,
        email: `${email}`,
        phone: `${phone}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div id="update">
      <div className="mb-3 p-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          First Name
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder={updateItem.firstName}
        />
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Maidan Name
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder={updateItem.maidenName}
        />
        <label htmlFor="exampleFormControlInput3" className="form-label">
          Last Name
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder={updateItem.lastName}
        />
        <label htmlFor="exampleFormControlInput4" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput4"
          placeholder={updateItem.email}
        />
        <label htmlFor="exampleFormControlInput5" className="form-label">
          Phone
        </label>
        <input
          type="phone"
          className="form-control"
          id="exampleFormControlInput5"
          placeholder={updateItem.phone}
        />
        <Link
          onClick={() => {
            Update(updateItem.id);
            alert("Item Have Updated");
          }}
          to={"/"}
          type="button"
          class="btn btn-outline-primary mt-3"
        >
          Update
        </Link>
      </div>
    </div>
  );
}
