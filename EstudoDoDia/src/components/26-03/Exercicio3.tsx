import { useEffect, useState } from "react";

// Busca uma lista de todos os posts e mostra na tela. Adiciona um input de busca que filtra os posts pelo título em tempo real 
// — sem fazer novo fetch, filtrando o array que já veio da API.
// Loading e error obrigatórios. Lista filtrada como estado derivado.

interface Posts {
  id: number,
  title: string,
  body: string,
}

function Exercicio3() {
  const [text, setText] = useState<string>("");
  const [dados, setDados] = useState<Posts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const titleFilter = dados.filter((item) => item.title.toLowerCase().includes(text.trim()))

  useEffect(() => {
   
    const buscar = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`,
        );
        if (!response.ok) throw new Error("Erro ao carregar!");
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

  if(loading) {
    return <p>Carregando...</p>
  }

  if(error) {
    return <p>{error}</p>
  }

  return <div>
    <input type="text"  value={text} onChange={(e) => setText(e.target.value)}/>
    <ul>
        {titleFilter.map((item) => (
            <li key={item.id}>{item.title}<br/>{item.body}</li>
        ))}
    </ul>
  </div>;
}

export default Exercicio3;
