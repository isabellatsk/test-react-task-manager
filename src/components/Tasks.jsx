import PropTypes from "prop-types";
import { ChevronRightIcon, TrashIcon } from "lucide-react"; //icons de lucide-react
import { useNavigate } from "react-router-dom"; //navegação
import Button from "./Button";

// componente principal
function Tasks(props) {
  const navigate = useNavigate(); //  função do react-router-dom para navegar para outra rota via código

  //função para ver detalhes da tarefa
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams(); //objeto para montar parâmetros da URL

    //define os parâmetros title e description com os valores da tarefa
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}}`); //navega para a rota /task com esses parâmetros na query string
  }

  //return do componente TaskPage
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <h2 className="text-center w-full text-gray-700 text-xl">Ver Tarefas</h2>
      {props.task.map(
        (
          task //percorre a lista com map, renderizando um <li> para cada tarefa
        ) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => props.onTaskClick(task.id)} //marcar e desmarcar tarefa como concluída
              className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
                task.isCompleted && "line-through" // se tiver concluida coloca a linha
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
        )
      )}
    </ul>
  );
}

// usando proptypes para declarar a validação das props
Tasks.propTypes = {
  onTaskClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  task: PropTypes.node.isRequired,
};
export default Tasks;
