import Link from "next/link"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Post({ params }: Props) {
  const { slug } = await params

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  
  if (!res.ok) notFound() // ← redireciona para o not-found.tsx

  const post = await res.json()

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/blog">← Voltar</Link>
    </div>
  )
}