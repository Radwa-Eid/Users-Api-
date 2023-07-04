import "./singleTodo.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
export default function SingleTodo({ todo }) {
  const icon = () => {
    if (todo.completed) return <BsFillCheckCircleFill className="icon correct"/>;
    else return <RxCrossCircled className="icon wrong"/>;
  };
  return (
    <tr>
      <td>{todo.todo}</td>
      <td>{icon()}</td>
    </tr>
  );
}
