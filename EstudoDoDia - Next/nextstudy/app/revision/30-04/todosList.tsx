"use client"

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Todos {
  id: number;
  title: string;
}

async function fetchTodos(): Promise<Todos[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  if (!response.ok) throw new Error("Lista de tarefas  nao escontrada.");
  return response.json();
}

export default function TodosList() {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos
    })

    if (isLoading) return <p>Carregando...</p>
    if (isError) return <p>Erro ao carregar</p>

  return <ul>
    {data?.map((todo) => (
        <li key={todo.id}><Link href={`/revision/30-04/${todo.id}`}>{todo.title}</Link></li>
    ))}
  </ul>;
}
