// Use a API https://jsonplaceholder.typicode.com/albums e https://jsonplaceholder.typicode.com/albums/:id.
// Crie duas páginas:
// /albums — lista todos os álbuns com link para o detalhe de cada um
// /albums/[id] — exibe o título do álbum e busca as fotos dele em https://jsonplaceholder.typicode.com/albums/:id/photos, exibindo o título de cada foto
// Requisitos:

// useQuery nos dois Client Components
// queryKey correto em cada um — inclua o id onde necessário
// Tratar isLoading e isError nos dois
// O Server Component de /albums/[id] só extrai o id e passa pro filho

"use client"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

interface albums {
    id: number,
    title: string,
}

async function fetchAlbums(): Promise<albums[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    if (!response.ok) throw new Error("Erro ao carregar albums")
    return response.json()
}

export default function AlbumsList() {
    const { data, isLoading, isError} = useQuery({
        queryKey: ["albums"],
        queryFn: fetchAlbums
    })

    if (isLoading) return <p>Carregando...</p>
    if (isError) return <p>Erro ao carregar Albums</p>

    return (
        <ul>
            {data?.map(album => (
                <li key={album.id}>
                    <Link href={`/albums/${album.id}`}>{album.title}</Link>
                </li>
            ))}
        </ul>
    )
}

