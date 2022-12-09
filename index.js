import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

async function getTask() {
  const url = "https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks";
  const resultado = await axios.get(url, { params: { user: "Ricardo" } });
  return resultado.data;
}

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //utilizando Promise
    //getTask().then((_tarefas)=> setTasks(_tarefas));

    //utilizando uma função --RECOMENDADA
    async function getDados() {
      const _tarefas = await getTask();
      setTasks(_tarefas);
    }
    getDados();
  }, []);

  return (
    <div className="App">
      <h1>My Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li>{task.description}</li>
        ))}
      </ul>
    </div>
  );
}
