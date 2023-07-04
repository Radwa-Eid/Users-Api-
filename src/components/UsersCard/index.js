import { Link, json, useParams } from "react-router-dom";
import "./usersCard.css";
import { useEffect, useState } from "react";
import { deleteUser } from "../../services/api";

export default function UsersCard({ user }) {
  const DeleteItem = async (id) => {
    const data = await deleteUser(id);
    alert(`This Item With Id: ${data.id} Is Deleted`);
  };
  return (
    <div className="card cart mb-3">
      <div className="row g-0 align-items-center justify-content-center">
        <div className="col-md-4 cardImg">
          <img src={user.image} alt={user.firstName} />
        </div>
        <div className="col-md-8 cardText">
          <div className="card-body">
            <h5 className="card-title">
              {user.firstName + " " + user.lastName}
            </h5>
            <p className="card-text">
              <span>Department : </span>
              {" " + user.company.department}
            </p>
            <p className="card-text">
              <span>Job Tittle : </span>
              {" " + user.company.title}
            </p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <Link
                to={`users/${user.id} `}
                type="button"
                class="btn btn-outline-primary"
              >
                More Info
              </Link>
              <Link
                to={`users/${user.id}/posts`}
                type="button"
                class="btn btn-outline-primary"
              >
                Posts
              </Link>
              <Link
                to={`users/${user.id}/todos`}
                type="button"
                class="btn btn-outline-primary"
              >
                ToDos
              </Link>
              <Link to={`users/${user.id}/update`} type="button" class="btn btn-outline-primary">
                Update
              </Link>
              <button
                onClick={() => {
                  DeleteItem(user.id);
                }}
                type="button"
                class="btn btn-outline-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
