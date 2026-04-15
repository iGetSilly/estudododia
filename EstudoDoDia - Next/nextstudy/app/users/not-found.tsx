import Link from "next/link";

export default function notFound() {
    return (
        <div>
            <h1>Usuario não encontrado!</h1>
            <Link href="/users">← Voltar para os usuarios</Link>
        </div>
    )
}