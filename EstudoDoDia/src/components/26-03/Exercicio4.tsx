import { useEffect, useState } from "react";

// Busca a lista de todos os usuários e mostra o nome e email de cada um. Ao clicar em um usuário, busca os posts desse usuário e mostra abaixo da lista.
// URLs:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts?userId=1
// Você vai precisar de:

// Dois estados de dados separados — um para usuários, um para posts
// Um estado para o userId selecionado
// Dois useEffects — um para buscar usuários, um para buscar posts quando o userId mudar

interface Posts {
    id:number,
  UserId: number;
  title: string;
  body: string;
}

interface Users {
  id: number;
  name: string;
  email: string;
}

function Exercicio4() {
  const [userId, setUserId] = useState<number>(0);
  const [post, setPost] = useState<Posts[]>([]);
  const [user, setUser] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setError("");
    const buscarUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) throw new Error("Erro na requisição");
        const data: Users[] = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro");
      } finally {
        setLoading(false);
      }
    };
    buscarUser();
  }, []);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    setError("");
    const buscarPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        );
        if (!response.ok) throw new Error("Erro na requisição");
        const data: Posts[] = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro");
      } finally {
        setLoading(false);
      }
    };
    buscarPost();
  }, [userId]);

  const handleSelectUser = (userId: number) => {
    setUserId(userId);
  };

  if (loading) return <p>carregando...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {user.map((item) => (
          <li key={item.id}>
            Nome: {item.name} <br /> Email: {item.email} <br />{" "}
            <button onClick={() => handleSelectUser(item.id)}>
              Selecionar Usuario
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {post.map((item) => (
            <li key={item.id}>{item.body} <br/> {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercicio4;
