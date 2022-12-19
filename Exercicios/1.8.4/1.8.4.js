import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import './styles.css';

export default function App() {
  const [adicionada, setAdicionada] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    const url = 'https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks';
    const resultado = await axios.get(url, { params: { user: 'Ricardo' } });
    setTarefas(resultado.data);
  }

  async function getTask() {
    const url =
      'https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks/' +
      '047d56f9-e546-4009-952f-29eac0a629eb';
    const resultado = await axios.get(url);
    console.log(resultado.data);
  }

  async function updateTask() {
    const url =
      'https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks/' +
      '047d56f9-e546-4009-952f-29eac0a629eb';
    const resultado = await axios.put(url, {
      description: 'Teste ti21 - Ricardo',
    });
    console.log(resultado.data);
  }

  async function deleteTask(id) {
    const url =
      'https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks/' + id;
    const resultado = await axios.delete(url);
    console.log(resultado.data);
  }

  async function createTask() {
    const url = 'https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks';
    const resultado = await axios.post(url, {
      description: adicionada,
      user: 'Ricardo',
    });
    console.log(resultado.data);
  }

  const onAdicionarTarefa = async () => {
    tarefas.push(adicionada);
    setAdicionada('');
    await createTask();
    getTasks();
  };

  const excluirTarefa = async (id) => {
    await deleteTask(id);
    deleteTask();
    getTasks();
  };

  return (
    <div className="App">
      <h1>Tarefas</h1>
      <div class="tarefas_adicionar">
        <div class="input_nome">
          <label htmlFor="nome">Nome</label>
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
          Adicionar
        </button>
      </div>
      <ul>
        {tarefas.map((tarefa, id) => (
          <li>
            <div class="tarefa_listada">
              <span>{tarefa.description}</span>
              <button class="excluir" onClick={() => excluirTarefa(tarefa.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}