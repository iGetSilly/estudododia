"use client"

import { useQuery } from "@tanstack/react-query";

interface todo {
  id: string;
  title: string;
  completed: boolean
}

async function fetchTodo(id: string): Promise<todo> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  if (!response.ok) throw new Error("Tarefa não encontrada");
  return response.json();
}

export default function TodosDetails({id}: {id: string}) {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["todo", id],
        queryFn: () => fetchTodo(id)
    })

    if (isLoading) return <p>Carregando....</p>
    if (isError) return <p>Erro ao carregar</p>

  return <div>
    <h1>{data?.title}</h1>
    {data?.completed ? <p>A tarefa está completa</p> : <p>A tarefa não está completa</p>}
  </div>;
}
