import { useReducer, useState, type ChangeEvent } from "react";

// Crie um app de notas com useReducer. Cada nota tem id, titulo e texto.
// As actions são: adicionar nota, remover nota e limpar tudo.
// Dois inputs para titulo e texto, botão adicionar, e lista das notas com botão remover em cada uma.

type Notas = {
  id: string;
  titulo: string;
  texto: string;
};

type State = {
  notas: Notas[];
};

type Form = {
  titulo: string,
  texto: string
}

type Action =
  | { type: "adicionar"; nota: Notas }
  | { type: "remover"; id: string }
  | { type: "limpar" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "adicionar":
      return { notas: [...state.notas, action.nota] };
    case "remover":
      return {
        notas: state.notas.filter((note) => note.id !== action.id),
      };
    case "limpar":
      return { notas: [] };
    default:
      return state;
  }
}

function Exercicio2() {
  const [state, dispatch] = useReducer(reducer, { notas: [] });
  const [nota, setNota] = useState<Form>({ titulo: "", texto: "" });

  const handleAddNote = (til: string, text: string) => {
    const novaNota: Notas = {
      id: crypto.randomUUID(),
      titulo: til,
      texto: text,
    };

    dispatch({ type: "adicionar", nota: novaNota });
    setNota({ titulo: "", texto: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNota((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <label htmlFor="titulo">Digite seu titulo:</label>
      <input
        type="text"
        name="titulo"
        onChange={handleChange}
        value={nota.titulo}
      />
      <label htmlFor="texto">Digite sua Descrição</label>
      <input
        type="text"
        name="texto"
        onChange={handleChange}
        value={nota.texto}
      />
      <button onClick={() => handleAddNote(nota.titulo, nota.texto)}>
        Adicionar
      </button>
      {state.notas.map((note) => (
        <div key={note.id}>
          <p>Titulo: {note.titulo}</p>
          <p>Descrição: {note.texto}</p>
          <button onClick={() => dispatch({ type: "remover", id: note.id })}>
            Remover
          </button>
        </div>
      ))}
      <button onClick={() => dispatch({ type: "limpar" })}>Limpar</button>
    </div>
  );
}

export default Exercicio2;
