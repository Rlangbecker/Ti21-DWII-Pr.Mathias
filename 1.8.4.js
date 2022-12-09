import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

async function getTask() {
  const url = "https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks";
  const resultado = await axios.get(url, { params: { user: "Ricardo" } });
  return resultado.data;
}

export default function App() {
  const [adicionada, setAdicionada] = useState("");
  const [tasks, setTasks] = useState([]);

  const onAdicionarTarefa = () => {
    tasks.push(adicionada);
    setTasks(adicionada);
    setAdicionada("");
  };

  useEffect(() => {
    async function getDados() {
      const _tarefas = await getTask();
      setTasks(_tarefas);
    }
    getDados();
  }, []);

  return (
    <div className="App">
      <h1>Tarefas</h1>
      <div class="tarefas_adicionar">
        <div class="input_nome">
          <label htmlFor="nome">Task</label>
          <input
            id="nome"
            type="text"
            value={adicionada}
            onChange={(event) => {
              setAdicionada(event.target.value);
            }}
          />
        </div>
        <button class="adicionar" onClick={onAdicionarTarefa}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((Task, index) => (
          <li>
            <div class="tarefa_listada">
              <span>{Task.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
