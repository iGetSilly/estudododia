import { useEffect, useState } from "react";

// Busca essa URL e mostra só o título e o corpo de cada post na tela. Loading e error obrigatórios.
// https://jsonplaceholder.typicode.com/posts

interface Posts {
  id: number;
  title: string;
  body: string;
}

function Exercicio1() {
  const [dados, setDados] = useState<Posts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const buscar = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) throw new Error("Erro ao carregar");

        const data: Posts[] = await response.json();
        setDados(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro");
      } finally {
        setLoading(false);
      }
    };
    buscar();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
    
  }

  if (error) {
    return <p>{error}</p>;
   
  }

  return (
    <div>
      <ul>
        {dados.map((item) => (
          <li key={item.id}>
            T{item.title}
            <br />
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercicio1;
