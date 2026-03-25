import { useEffect, useState } from "react";

// Crie um componente que busca uma lista de usuários de uma API quando carregar.
// Mostre os usuários na tela. Enquanto carrega, mostre "Carregando...".
// Se der erro, mostre "Erro ao carregar".

interface User {
  id: number;
  name: string;
  email: string;
}

function Exercicio7() {
  const [dados, setDados] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const buscar = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Erro ao carregar");
        }

        const data: User[] = await response.json();

        if (!data || data.length === 0) {
          throw new Error("Nenhum dado encontrado!");
        }
        setDados(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao carregar");
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
            {item.name}
            <br />
            {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercicio7;
