import PropTypes from "prop-types";
import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow mt-2 flex flex-col">
      <h2 className="text-center w-full text-gray-700 text-xl">
        Adicionar Tarefas
      </h2>
      <Input //importando de Input.jsx
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input //pra nao repetir classname
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() && !description.trim()) {
            //se clicou pra add e não tem nada nos input
            return alert("Preencha o título e a descrição da tarefa"); //trim() pra tirar os espaços em branco
          }

          onAddTaskSubmit(title, description);
          setTitle(""); //pra zerar o input
          setDescription(""); //pra zerar o input
        }}
        className="bg-slate-500 text-center px-4 py-2 w-full text-white font-medium rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

AddTask.propTypes = {
  onAddTaskSubmit: PropTypes.func.isRequired,
};

export default AddTask;
