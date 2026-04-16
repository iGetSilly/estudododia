import AlbumDetails from "./AlbumsDetails"

interface Props {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
  const { id } = await params
  return <AlbumDetails id={id} />
}