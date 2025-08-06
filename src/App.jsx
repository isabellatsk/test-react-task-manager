//toda função que retorna jsx é um componente

import { useEffect, useState } from "react"; //importando os hooks
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid"; //importando uuid para gerar id aleatório
import Title from "./components/Title";

// componente principal
function App() {
  const [tasks, setTasks] = useState(() => {
    //usando useState
    const saved = JSON.parse(localStorage.getItem("tasks")) || []; //cria um estado React (useState) cujo valor inicial vem do localStorage

    // adiciona isCompleted: false se não existir
    return saved.map((task) => ({
      isCompleted: false,
      ...task,
    }));
  });

  //salva automaticamente no localStorage toda vez que o estado tasks mudar
  useEffect(() => {
    //executa essa função sempre que algum valor da lista for alterado
    localStorage.setItem("tasks", JSON.stringify(tasks)); //convertendo o json em string
  }, [tasks]); //lista de tasks

  //função para atualizar o isCompleted da tarefa
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //precisa atualizar a tarefa para completed
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //não precisa alterar
      return task;
    });
    setTasks(newTasks); //atualiza o states
  }

  //função para deletar tarefa
  function onDeleteClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId); //criando lista sem a tarefa clicada
    setTasks(newTasks); //atualizando
  }

  //função para adicionar uma tarefa
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), //gerar id aleatório com uuid
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); //add todas as tarefas que já estavam mais a nova
  }

  //return do componente App
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        {/* puxando componentes e chamando as funções */}
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          task={tasks}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
}
export default App; //torna App acessível em outros arquivos.
