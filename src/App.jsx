import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

//toda função que retorna jsx é um componente
function App() {
  const [tasks, setTasks] = //pegar lista local storage ou mostrar lista vazia se não tiver lista
    useState(JSON.parse(localStorage.getItem("tasks"))) || [];

  //hook p salvar em localstorage
  useEffect(() => {
    //executa essa função sempre que algum valor da lista for alterado
    localStorage.setItem("tasks", JSON.stringify(tasks)); //convertendo o json em string
  }, [tasks]); //lista

  //só vai ser executado na primeira vez que o usuário acessar a aplicação (por causa da lista vazia)
  useEffect(() => {
    // async function fetchTasks() {
    //   //chamar a API
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=10"
    //   ); //pegar as tarefas (get)
    //   //pegar os dados que ela retorna
    //   const data = await response.json(); //converter resposta em json
    //   //armazenar/persistir esses dados no state
    //   setTasks(data);
    // }
    // // fetchTasks(); se quiser pode chamar uma api para pegar as tarefas
  }, []); //lista vazia

  //atualizar o isCompleted da tarefa
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks); //atualiza o states
  }

  function onDeleteClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), //gerar id aleatório com uuid
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); //todas as tarefas que já tinha + a nova / atualiza
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
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
export default App;
