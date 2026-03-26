import { useEffect, useState } from "react";

// Busca um único post pelo id. Mostre o título e o corpo. Loading e error obrigatórios.
// https://jsonplaceholder.typicode.com/posts/1

interface Posts {
  id: number;
  title: string;
  body: string;
}

function Exercicio2() {
  const [id, setId] = useState<number>(1);
  const [dados, setDados] = useState<Posts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id || isNaN(id)) return;
    const buscar = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );

        if (!response.ok) throw new Error("Erro ao carregar");
        const data: Posts = await response.json();
        setDados(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "error");
      } finally {
        setLoading(false);
      }
    };
    buscar();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <label htmlFor="id">Digite o ID que deseja procurar:</label>
      <br />
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.valueAsNumber)}
      />
      {dados && (
        <ul>
          <li key={dados.id}>
            {dados.title}
            <br />
            {dados.body}
          </li>
        </ul>
      )}
    </div>
  );
}

export default Exercicio2;
