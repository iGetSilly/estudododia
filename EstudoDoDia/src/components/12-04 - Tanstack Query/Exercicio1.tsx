import { useQuery } from "@tanstack/react-query";

// Busca a lista de posts dessa URL usando useQuery e mostra o título de cada um na tela:
// https://jsonplaceholder.typicode.com/posts

interface Post {
  id: number;
  title: string;
  body: string;
}

const buscarPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Erro ao buscar posts");
  return response.json();
};

function Exercicio1() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: buscarPosts,
  });

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar</p>;

  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercicio1;
