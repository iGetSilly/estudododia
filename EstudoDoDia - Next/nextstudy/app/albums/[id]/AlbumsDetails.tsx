"use client";

import { useQuery } from "@tanstack/react-query";

interface Album {
  id: number;
  title: string;
}

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

async function fetchAlbum(id: string): Promise<Album> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`,
  );
  if (!response.ok) throw new Error("Album não encontrado!");
  return response.json();
}

async function fetchPhoto(id: string): Promise<Photo[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}/photos`,
  );
  if (!response.ok) throw new Error("Photo não encontrada");
  return response.json();
}

export default function AlbumDetails({ id }: { id: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["album", id],
    queryFn: () => fetchAlbum(id),
  });

  const {
    data: photos,
    isLoading: loadingPhotos,
    isError: errorPhotos,
  } = useQuery({
    queryKey: ["album-photos", id],
    queryFn: () => fetchPhoto(id),
  });

  if (isLoading || loadingPhotos) return <p>Carregando...</p>;
  if (isError || errorPhotos) return <p>Erro ao carregar</p>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <ul>
        {photos?.map((photo) => (
          <li key={photo.id}>{photo.title}</li>
        ))}
      </ul>
    </div>
  );
}
