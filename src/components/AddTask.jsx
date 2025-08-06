import PropTypes from "prop-types";
import { useState } from "react";
import Input from "./input";

// componente principal
function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState(""); //recebe o valor do parâmetro title
  const [description, setDescription] = useState(""); //recebe o valor do parâmetro description

  //return do componente TaskPage
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow mt-2 flex flex-col">
      <h2 className="text-center w-full text-gray-700 text-xl">
        Adicionar Tarefas
      </h2>
      <Input //importando o componente Input.jsx
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)} //atualiza o estado title sempre que o valor do campo mudar
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() && !description.trim()) {
            //inputs vazios
            return alert("Preencha o título e a descrição da tarefa"); //trim() pra tirar os espaços em branco
          }

          onAddTaskSubmit(title, description);
          setTitle(""); //zerar o input
          setDescription(""); //zerar o input
        }}
        className="bg-slate-500 text-center px-4 py-2 w-full text-white font-medium rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

// usando proptypes para declarar a validação
AddTask.propTypes = {
  onAddTaskSubmit: PropTypes.func.isRequired,
};
export default AddTask;
