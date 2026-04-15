import Link from "next/link"

interface Post {
  id: number
  title: string
}

interface Props {
  searchParams: Promise<{ q?: string }>
}

export default async function Blog({ searchParams }: Props) {
  const { q } = await searchParams

  // Fetch direto no Server Component — sem useEffect!
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const posts: Post[] = await res.json()

  const filtrados = q
    ? posts.filter(p => p.title.toLowerCase().includes(q.toLowerCase()))
    : posts

  return (
    <div>
      <h1>Blog</h1>
      <form>
        <input name="q" defaultValue={q} placeholder="Buscar post" />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {filtrados.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}