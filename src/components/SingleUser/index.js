import { Link } from "react-router-dom";
export default function SingleUser({ props }) {
  console.log({ props });
  const {
    id,
    gender,
    email,
    image,
    firstName,
    maidenName,
    lastName,
    age,
    birthDate,
    bloodGroup,
    eyeColor,
    phone,
  } = props;
  return (
    <div
      id="info"
      className="row g-0 align-items-center justify-content-center"
    >
      <div className="col-md-4 cardImg">
        <img src={image} alt={firstName} />
      </div>
      <div className="col-md-8 cardText">
        <div className="card-body">
          <h5 className="card-title">
            {firstName + " " + maidenName + " " + lastName}
          </h5>
          <p className="card-text">
            <span>Blood Group : </span>
            {" " + bloodGroup}
          </p>
          <p className="card-text">
            <span>Birth Date: </span>
            {" " + birthDate}
          </p>
          <p className="card-text">
            <span>Age: </span>
            {" " + age}
          </p>
          <p className="card-text">
            <span>Gender: </span>
            {" " + gender}
          </p>
          <p className="card-text">
            <span>Eye Color: </span>
            {" " + eyeColor}
          </p>
          <p className="card-text">
            <span>Gender: </span>
            {" " + gender}
          </p>
          <p className="card-text">
            <span>Email: </span>
            {" " + email}
          </p>
          <p className="card-text">
            <span>Phone: </span>
            {" " + phone}
          </p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <Link to={"posts"} type="button" class="btn btn-outline-primary">
              Posts
            </Link>
            <Link to={"todos"} type="button" class="btn btn-outline-primary">
              ToDos
            </Link>
            <Link
              to={"update"}
              type="button"
              class="btn btn-outline-primary"
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
