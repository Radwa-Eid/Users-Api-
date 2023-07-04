import "./homepage.css";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/api";
import UsersCard from "../../components/UsersCard";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const data = await getAllUsers();
    setUsers(data.users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const card = users.map((user) => {
    return (
      <div className="col-6" key={user.id}>
        <UsersCard user={user} />
      </div>
    );
  });
 
  return (
    <div className="homePage">
      <div className="container">
        <div className="container text-center">
          <div className="row align-items-start">{card}</div>
        </div>
      </div>
    </div>
  );
}
