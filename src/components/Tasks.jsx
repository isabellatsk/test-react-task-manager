import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

/* eslint-disable react/prop-types */
function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();

    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}}`);
  }

  // console.log({ props });
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <h2 className="text-center w-full text-gray-700 text-xl">Ver Tarefas</h2>
      {props.task.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)} //id da tarefa atual
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through" // se tiver concluida add a linha
            }`}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => props.onDeleteClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
