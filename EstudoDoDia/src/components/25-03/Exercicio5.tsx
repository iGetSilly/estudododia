import { useEffect, useState } from "react";

// Crie um componente com um contador. O título da aba do browser deve mostrar quantas vezes o botão foi clicado.
// Quando o componente sair da tela, o título deve voltar para "React App".

function Exercicio5() {
  const [count, setCount] = useState<number>(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    (document.title = String(count))

    return () => {
        document.title = "React App"
    }
  }, [count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>Incrementar</button>
    </div>
  );
}

export default Exercicio5;
