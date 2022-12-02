import React from "react";
import './styles.css';

const Personagens = (props) => {
  const personagens = [
    'Jill Valentine',
        'Jack Baker',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
        'Lucas Baker',
  ];
   const personagensFiltrados = personagens.filter((personagem) => {
  const Familia = personagem.toLowerCase().includes(props.familia);
  return Familia;
});

  return (
    <div>

      <ul>
        {personagensFiltrados.map(personagem => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  const [show,setShow] = React.useState('Todos');

  const handleOnClick = (value) => setShow(value);

  return (
    <div className="App">
      <div class="container">
        <h3>Mostrar Personagens de Resident Evil</h3>
        {show === 'Baker' && (
        <div>
          <Personagens familia="baker" />
        </div>
      )}
      {show === 'Redfield' && (
        <div>
          <Personagens familia="redfield"/>
        </div>
      )}
      {show === 'Todos' && (
        <div>
          <Personagens familia=""/>
        </div>
      )}
        <div id="divBaker">
        <button class="botaoBaker" onClick={()=>handleOnClick('Baker')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
        Baker</button>
        </div>
        <div id="divRedfield">
        <button class="botaRedfield"onClick={()=>handleOnClick('Redfield')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
          Redfield</button>
          </div>
          <div id="divTodos">
        <button class="botaoTodos" onClick={()=>handleOnClick('Todos')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
          Todos</button>
          </div>
        
      </div>
    </div>
  );
}