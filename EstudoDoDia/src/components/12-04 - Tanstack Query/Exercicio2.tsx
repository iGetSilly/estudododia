import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// Busca a lista de posts dessa URL usando useQuery e mostra o título de cada um na tela:
// https://jsonplaceholder.typicode.com/posts

interface Post {
  id: number;
  title: string;
  body: string;
}

const buscarPosts = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  if (!response.ok) throw new Error("Erro ao buscar posts");
  return response.json();
};

function Exercicio1() {
  const [id, setId] = useState<number>(0);
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => buscarPosts(id),
    enabled: !!id && !isNaN(id),
  });

  return (
    <div>
      <input
        value={id}
        onChange={(e) => setId(e.target.valueAsNumber)}
        type="number"
        placeholder="Digite um ID de post"
      />
      {isLoading && <p>Carregando...</p>}
      {error && <p>Erro ao carregar</p>}
      {posts && posts.title}
      {posts && posts.body}
    </div>
  );
}

export default Exercicio1;
