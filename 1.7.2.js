import './styles.css';

const Personagens = (props) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];
  const personagensFiltrados = personagens.filter((personagem) => {
    //const ehDaFamilia = personagem.includes('Valentine');
    const ehDaFamilia = personagem.toLowerCase().includes(props.familia);
    return ehDaFamilia;
  });

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {personagensFiltrados.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return <Personagens familia="redfield" />;
}