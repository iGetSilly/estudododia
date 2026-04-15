import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <h1>Post não encontrado</h1>
      <Link href="/blog">← Voltar para o blog</Link>
    </div>
  )
}