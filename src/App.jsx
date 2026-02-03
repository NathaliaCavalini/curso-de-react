import { useState } from "react";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      desciption:
        "Estudar programação para se tornar um desenvolvedor full-stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      desciption: "Estudar inglês para se tornar fluente",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      desciption:
        "Estudar matemática para se tornar um desenvolvedor full-stack",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      //Preciso atualizar a tarefa
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      //Nao preciso atualizar a tarefa
      return task;
    });
    setTasks(newTasks);
  }

function onDeleteTaskClick(taskId) {
  const newTasks = tasks.filter(task => task.id != taskId);
  setTasks(newTasks);
}

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask setTasks={setTasks} tasks={tasks} />
        <Tasks 
        tasks={tasks} 
        onTaskClick={onTaskClick} 
        onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
