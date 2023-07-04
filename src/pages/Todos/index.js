import "./todo.css";
import { useEffect, useState } from "react";
import { todos } from "../../services/api";
import { useParams } from "react-router-dom";
import SingleTodo from "../../components/SingleTodo";

export default function Todos() {
  const [userToDos, setUserToDos] = useState([]);
  const todoId = useParams();
  const getPosts = async () => {
    const data = await todos(todoId.id);
    setUserToDos(data.todos);
  };
  useEffect(() => {
    getPosts();
  }, [todoId.id]);

  const todosList = userToDos.map((todo) => {
    console.log(todo);
    return <SingleTodo todo={todo} />;
  });
  return (
    <div className="container posts">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Todo Name</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>{todosList}</tbody>
      </table>
    </div>
  );
}
