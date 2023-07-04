import "./userData.css";
import { useParams } from "react-router-dom";
import { getUser } from "../../services/api";
import { useEffect, useState } from "react";
import SingleUser from "../SingleUser";

export default function UserData() {
  const [userData, setUserData] = useState([]);
  const params = useParams();
  const getInfo = async () => {
    const info = await getUser(params.id);
    setUserData(info);
  };
  useEffect(() => {
    getInfo();
  }, [params.id]);
  return (
    <div className="cartData container">
      <div className="card mb-3" key={params.id}>
        <SingleUser props={userData} />
      </div>
    </div>
  );
}
