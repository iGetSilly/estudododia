import Link from "next/link"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ id: string }>
}

export default async function User({ params }: Props) {
  const { id } = await params

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  
  if (!res.ok) notFound()

  const user = await res.json()

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <Link href="/users">← Voltar</Link>
    </div>
  )
}